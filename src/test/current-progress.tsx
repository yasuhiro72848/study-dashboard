import { DailyProgress, CurrentProgress } from '@/types/progress';

export function getCurrentProgress(
  dailyProgress: DailyProgress,
  currentProgress: CurrentProgress,
): CurrentProgress {
  return {
    progressDate: dailyProgress.date,
    completeTime: dailyProgress.completeTime,
    goalTimeSetting: currentProgress.goalTimeSetting,
    achievementRate: dailyProgress.achievementRate,
  };
}

export function setGoalTime(
  currentProgress: CurrentProgress,
  goalTime: number,
): CurrentProgress {
  return {
    ...currentProgress,
    goalTimeSetting: goalTime,
  };
}
