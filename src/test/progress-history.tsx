import { DailyProgress, CurrentProgress } from '@/types/progress';

export function getDailyProgress(
  dailyProgresses: DailyProgress[],
  date: string,
): DailyProgress | undefined {
  return dailyProgresses.find((dailyProgress) => dailyProgress.date === date);
}

export function getGoalTime(
  dailyProgress: DailyProgress,
  currentProgress: CurrentProgress,
): DailyProgress {
  return {
    ...dailyProgress,
    goalTime: currentProgress.goalTimeSetting,
  };
}
