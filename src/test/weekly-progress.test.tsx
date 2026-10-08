import { expect, test } from 'vitest';
import {
  getDateRange,
  getTotalCompleteTime,
  getWeeklyAverageTime,
} from './weekly-progress';
import { DailyProgress } from '@/types/progress';

test('週間の合計学習時間の計算', () => {
  const weeklyProgress: DailyProgress[] = [
    {
      id: 'progress-1',
      date: '10/03',
      completeTime: 2,
      goalTime: 6,
      achievementRate: 2 / 6,
      condition: '',
      historyMemo: '',
    },
    {
      id: 'progress-2',
      date: '10/05',
      completeTime: 3,
      goalTime: 6,
      achievementRate: 3 / 6,
      condition: '',
      historyMemo: '',
    },
    {
      id: 'progress-3',
      date: '10/10',
      completeTime: 6,
      goalTime: 6,
      achievementRate: 6 / 6,
      condition: '',
      historyMemo: '',
    },
  ];
  const dateRange = getDateRange(weeklyProgress, '10/01', '10/07');
  const totalCompleteTime = getTotalCompleteTime(dateRange);
  expect(totalCompleteTime).toBe(5);
});

test('週間の平均学習時間の計算', () => {
  const weeklyAverageTime = getWeeklyAverageTime(5, 7);
  expect(weeklyAverageTime).toBe(5 / 7);
});

// test('グラフ用の各日の平均学習時間の計算', () => {
//   expect().toBe();
// });

// test('グラフ用の達成率をProgressHistoryから取得する', () => {
//   expect().toBe();
// });

// test('グラフ用の各日の完了時間をProgressHistoryから取得する', () => {
//   expect().toBe();
// });
