import { expect, test } from 'vitest';
import { DailyProgress, CurrentProgress } from '@/types/progress';
import {
  getDailyProgress,
  updateGoalTime,
  changeGoalTime,
  updateCompleteTime,
  calculateAchievementRate,
  setCondition,
  setHistoryMemo,
  saveDailyProgress,
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

test('一日の進捗データをカレンダーから取得する', () => {
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

test('目標時間が変更された場合の達成率を再計算する', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  if (!dailyProgress) {
    throw new Error('データがありません');
  }
  const updateDailyProgress = changeGoalTime(dailyProgress, 4);
  const result = calculateAchievementRate(updateDailyProgress);
  expect(result).toEqual({
    ...updateDailyProgress,
    achievementRate: 0.5,
  });
});

test('conditionを変更できる', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  if (!dailyProgress) {
    throw new Error('データがありません');
  }
  const result = setCondition(dailyProgress, '普通');
  expect(result).toEqual({ ...dailyProgress, condition: '普通' });
});

test('historyMemoを変更できる', () => {
  const dailyProgress = getDailyProgress(progressHistories, '10/14');
  if (!dailyProgress) {
    throw new Error('データがありません');
  }
  const result = setHistoryMemo(
    dailyProgress,
    '第3章を終えて、JavaScriptの基礎を終えた。',
  );
  expect(result).toEqual({
    ...dailyProgress,
    historyMemo: '第3章を終えて、JavaScriptの基礎を終えた。',
  });
});

test('一日の進捗データがカレンダーにあるならば更新する', () => {
  const newDailyProgress: DailyProgress = {
    id: 'history-1',
    date: '10/14',
    completeTime: 2,
    goalTime: 4,
    achievementRate: 0.5,
    condition: 'good',
    historyMemo: 'チュートリアルを一通り終えた。',
  };
  const result = saveDailyProgress(progressHistories, newDailyProgress);
  expect(result).toEqual([
    {
      id: 'history-1',
      date: '10/14',
      completeTime: 2,
      goalTime: 4,
      achievementRate: 0.5,
      condition: 'good',
      historyMemo: 'チュートリアルを一通り終えた。',
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
  ]);
});

test('一日の進捗データがカレンダーにないならば追加する', () => {
  const newDailyProgress: DailyProgress = {
    id: 'history-3',
    date: '10/16',
    completeTime: 2,
    goalTime: 4,
    achievementRate: 0.5,
    condition: 'good',
    historyMemo: 'チュートリアルを復習した',
  };
  const result = saveDailyProgress(progressHistories, newDailyProgress);
  expect(result).toEqual([
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
    {
      id: 'history-3',
      date: '10/16',
      completeTime: 2,
      goalTime: 4,
      achievementRate: 0.5,
      condition: 'good',
      historyMemo: 'チュートリアルを復習した',
    },
  ]);
});
