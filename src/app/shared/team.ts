export interface Team {
    code: string;
    name: string;
    shield: string;
    primary: string;
    seccondary: string;
  }

  export interface TeamResolved {
    team : Team;
    error?: any;
  }

  export interface TeamListResolved {
    teams : Team[];
  }
  