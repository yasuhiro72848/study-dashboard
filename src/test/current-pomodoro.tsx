import { CurrentPomodoro, ElapsedPomodoro, Music } from '@/types/pomodoro';

export function updateFocusTime(
  currentPomodoro: CurrentPomodoro,
  focusTime: number,
): CurrentPomodoro {
  return {
    ...currentPomodoro,
    focusTime,
  };
}

export function updateShortBreak(
  currentPomodoro: CurrentPomodoro,
  shortBreak: number,
): CurrentPomodoro {
  return {
    ...currentPomodoro,
    shortBreak,
  };
}

export function updateSession(
  currentPomodoro: CurrentPomodoro,
  session: number,
): CurrentPomodoro {
  return {
    ...currentPomodoro,
    session,
  };
}

export function sessionCounter(currentPomodoro: CurrentPomodoro): number {
  return currentPomodoro.focusTime * currentPomodoro.session;
}

export function setFocusTimeMusic(
  currentPomodoro: CurrentPomodoro,
  focusMusic: string,
) {
  return {
    ...currentPomodoro,
    focusMusic,
  };
}

export function setBreakMusic(
  currentPomodoro: CurrentPomodoro,
  breakMusic: string,
) {
  return {
    ...currentPomodoro,
    breakMusic,
  };
}
