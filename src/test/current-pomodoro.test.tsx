import { expect, test } from 'vitest';
import {
  updateFocusTime,
  updateSession,
  updateShortBreak,
  sessionCounter,
  setFocusTimeMusic,
  setBreakMusic,
} from './current-pomodoro';

const currentPomodoro = {
  id: 'pomodoro-1',
  focusTime: 0,
  focusMusic: 'music-1',
  shortBreak: 0,
  breakMusic: 'music-2',
  session: 0,
};

test('集中時間が設定できる', () => {
  const result = updateFocusTime(currentPomodoro, 2);

  expect(result).toEqual({ ...currentPomodoro, focusTime: 2 });
});

test('休憩時間が設定できる', () => {
  const result = updateShortBreak(currentPomodoro, 1);
  expect(result.shortBreak).toBe(1);
});

test('セッション回数が指定できる', () => {
  const result = updateSession(currentPomodoro, 3);
  expect(result.session).toBe(3);
});

test('セッション回数に応じて累計完了時間が計算される', () => {
  const currentPomodoro = {
    id: 'pomodoro-1',
    focusTime: 3,
    focusMusic: 'music-1',
    shortBreak: 0,
    breakMusic: 'music-2',
    session: 3,
  };
  const result = sessionCounter(currentPomodoro);
  expect(result).toBe(9);
});

test('集中時間の音楽が設定できる', () => {
  const result = setFocusTimeMusic(currentPomodoro, 'music-3');
  expect(result.focusMusic).toBe('music-3');
});

test('休憩時間の音楽が設定できる', () => {
  const result = setBreakMusic(currentPomodoro, 'music-4');
  expect(result.breakMusic).toBe('music-4');
});
