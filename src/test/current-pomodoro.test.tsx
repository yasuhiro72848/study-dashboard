import { expect, test } from 'vitest';
import {
  updateFocusTime,
  updateSession,
  updateShortBreak,
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
  expect(result).toEqual({ ...currentPomodoro, shortBreak: 1 });
});

test('セッション回数が指定できる', () => {
  const result = updateSession(currentPomodoro, 3);
  expect(result).toEqual({
    ...currentPomodoro,
    session: 3,
  });
});

// test('セッション回数に応じて集中時間と休憩時間が繰り返し実行される', () => {
//   expect().toBe();
// });

// test('集中時間の音楽が設定できる', () => {
//   expect().toBe();
// });

// test('休憩時間の音楽が設定できる', () => {
//   expect().toBe();
// });

// test('集中時間が蓄積され累計完了時間として計算する', () => {
//   expect().toBe();
// });
