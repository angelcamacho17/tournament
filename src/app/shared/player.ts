export interface Player{
    code: string,
    name: string,
    team_code: string,
    blood_type: string,
    mail: string,
    phone: string,
    number: number,
    photo: string,
    captain: boolean,
    emergency_contact: {
    name: string,
    phone: string
    }
}