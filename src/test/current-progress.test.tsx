import { expect, test } from 'vitest';
import { DailyProgress, CurrentProgress } from '@/types/progress';
import { getCurrentProgress, setGoalTime } from './current-progress';

const dailyProgress: DailyProgress = {
  id: 'progress-1',
  date: '10/04',
  completeTime: 3,
  goalTime: 6,
  achievementRate: 3 / 6,
  condition: '好調',
  historyMemo: '',
};

const currentProgress: CurrentProgress = {
  progressDate: dailyProgress.date,
  completeTime: dailyProgress.completeTime,
  goalTimeSetting: 6,
  achievementRate: dailyProgress.achievementRate,
};

test('現在の累計完了時間、目標時間、達成率が反映される', () => {
  const result = getCurrentProgress(dailyProgress, currentProgress);
  expect(result).toEqual({
    progressDate: dailyProgress.date,
    completeTime: dailyProgress.completeTime,
    goalTimeSetting: 6,
    achievementRate: dailyProgress.achievementRate,
  });
});

test('目標時間を変更できる', () => {
  const result = setGoalTime(currentProgress, 9);
  expect(result.goalTimeSetting).toBe(9);
});
