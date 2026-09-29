export interface CurrentPomodoro {
  id: string;
  focusTime: number;
  focusMusic: Music['id'];
  shortBreak: number;
  breakMusic: Music['id'];
  session: number;
}

export interface ElapsedPomodoro {
  pomodoroId: CurrentPomodoro['id'];
  elapsedTime: number;
}

export interface Music {
  id: string;
  musicTitle: string;
  musicSrc: string;
}
