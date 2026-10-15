import { expect, test } from 'vitest';
import { DailyProgress, CurrentProgress } from '@/types/progress';
import {
  getDailyProgress,
  updateGoalTime,
  changeGoalTime,
  updateCompleteTime,
  calculateAchievementRate,
} from './progress-history';

const progressHistories: DailyProgress[] = [
  {
    id: 'history-1',
    date: '10/14',
    completeTime: 2,
    goalTime: 2,
    achievementRate: 0,
    condition: '',
    historyMemo: '',
  },
  {
    id: 'history-2',
    date: '10/15',
    completeTime: 6,
    goalTime: 3,
    achievementRate: 0,
    condition: '',
    historyMemo: '',
  },
];

const currentProgress: CurrentProgress = {
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
    achievementRate: 0,
    condition: '',
    historyMemo: '',
  });
});

test('CurrentProgressから設定済みのgoalTimeを取得する', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  if (!dailyProgress) {
    throw new Error('データがありません');
  }
  const newDailyProgress = updateGoalTime(dailyProgress, currentProgress);
  expect(newDailyProgress).toEqual({
    id: 'history-1',
    date: '10/14',
    completeTime: 2,
    goalTime: 6,
    achievementRate: 0,
    condition: '',
    historyMemo: '',
  });
});

test('DailyProgressからgoalTimeを設定できる', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  if (!dailyProgress) {
    throw new Error('データがありません');
  }
  const result = changeGoalTime(dailyProgress, 10);
  expect(result.goalTime).toBe(10);
});

test('PomodoroからcompleteTimeを取得する', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  if (!dailyProgress) {
    throw new Error('データがありません');
  }
  const result = updateCompleteTime(dailyProgress, 3);
  expect(result.completeTime).toBe(3);
});

test('完了時間と目標時間から達成率を計算する', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  if (!dailyProgress) {
    throw new Error('データがありません');
  }
  const result = calculateAchievementRate(dailyProgress);
  expect(result).toEqual({ ...dailyProgress, achievementRate: 1 });
});

// test('目標時間が変更された場合の達成率を再計算する', () => {
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
