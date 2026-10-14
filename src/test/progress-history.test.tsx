import { expect, test } from 'vitest';
import { DailyProgress, CurrentProgress } from '@/types/progress';
import { getDailyProgress, getGoalTime } from './progress-history';

const progressHistories = [
  {
    id: 'history-1',
    date: '10/14',
    completeTime: 2,
    goalTime: 2,
    achievementRate: 2 / 2,
    condition: '',
    historyMemo: '',
  },
  {
    id: 'history-2',
    date: '10/15',
    completeTime: 6,
    goalTime: 3,
    achievementRate: 3 / 6,
    condition: '',
    historyMemo: '',
  },
];

const currentProgress = {
  progressDate: '10/14',
  completeTime: 3,
  goalTimeSetting: 6,
  achievementRate: 3 / 6,
};

test('指定した日付からDailyProgressを呼び出す', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  expect(dailyProgress).toEqual({
    id: 'history-1',
    date: '10/14',
    completeTime: 2,
    goalTime: 2,
    achievementRate: 2 / 2,
    condition: '',
    historyMemo: '',
  });
});

test('CurrentProgressから設定済みのgoalTimeを取得する', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  if (!dailyProgress) {
    throw new Error('データがありません');
  }
  const newDailyProgress = getGoalTime(dailyProgress, currentProgress);
  expect(newDailyProgress).toEqual({
    id: 'history-1',
    date: '10/14',
    completeTime: 2,
    goalTime: 6,
    achievementRate: 2 / 2,
    condition: '',
    historyMemo: '',
  });
});

// test('PomodoroからcompleteTimeを取得する', () => {
//   expect().toBe();
// });

// test('DailyProgressからgoalTimeを設定できる', () => {
//   expect().toBe();
// });

// test('達成率を計算する', () => {
//   expect().toBe();
// });

// test('conditionを変更できる', () => {
//   expect().toBe();
// });

// test('historyMemoを変更できる', () => {
//   expect().toBe();
// });

// test('一日の進捗データをカレンダーに保存する', () => {
//   expect().toBe();
// });

// test('一日の進捗データをカレンダーから取得する', () => {
//   expect().toBe();
// });
