import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';
import { Team } from '../shared/team';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  teams: Team[] = [];
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private dataService: DataService,
    private router: Router,
    private http: HttpClient) {

    this.dataService.getTeams().subscribe((data:any)=>{
      this.teams = data;
    });
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'user': [null, [Validators.required], this.checkInUseUser],
      'team': [null, Validators.required],
      'password': [null, [Validators.required]] //, this.checkPassword]],
    });
  }

  get team() {
    return this.formGroup.get('team') as FormControl
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseUser(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 1000)
    })
  }

  getErrorUser() {
    return this.formGroup.get('user').hasError('required') ? 'Field is required' :
      this.formGroup.get('user').hasError('alreadyInUse') ? 'This user name is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post): void {
    this.loginService.logIn(post);
  }

}
