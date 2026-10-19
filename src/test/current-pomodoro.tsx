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
