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

  export interface TeamDetailC {
    id: number;
    teamCode: string;
    position?: number;
    points?: number;
    matches?: number;
    won?: number;
    lost?: number;
    draw?: number;
    goalsScored?: number;
    goalsRecieved?: number;
    yellowCards?: number;
    redCards?: number;
  }
