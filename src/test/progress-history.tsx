import { DailyProgress, CurrentProgress } from '@/types/progress';

export function getDailyProgress(
  dailyProgresses: DailyProgress[],
  date: string,
): DailyProgress | undefined {
  return dailyProgresses.find((dailyProgress) => dailyProgress.date === date);
}

export function updateGoalTime(
  dailyProgress: DailyProgress,
  currentProgress: CurrentProgress,
): DailyProgress {
  return {
    ...dailyProgress,
    goalTime: currentProgress.goalTimeSetting,
  };
}

export function changeGoalTime(
  dailyProgress: DailyProgress,
  newGoalTime: number,
): DailyProgress {
  return {
    ...dailyProgress,
    goalTime: newGoalTime,
  };
}

export function updateCompleteTime(
  dailyProgress: DailyProgress,
  pomodoroCompleteTime: number,
): DailyProgress {
  return {
    ...dailyProgress,
    completeTime: pomodoroCompleteTime,
  };
}

export function calculateAchievementRate(
  dailyProgress: DailyProgress,
): DailyProgress {
  return {
    ...dailyProgress,
    achievementRate: dailyProgress.completeTime / dailyProgress.goalTime,
  };
}

export function setCondition(
  dailyProgress: DailyProgress,
  condition: string,
): DailyProgress {
  return {
    ...dailyProgress,
    condition,
  };
}

export function setHistoryMemo(
  dailyProgress: DailyProgress,
  historyMemo: string,
): DailyProgress {
  return {
    ...dailyProgress,
    historyMemo,
  };
}

export function saveDailyProgress(
  dailyProgresses: DailyProgress[],
  newDailyProgress: DailyProgress,
): DailyProgress[] {
  const result = dailyProgresses.some(
    (progress) => progress.date === newDailyProgress.date,
  );

  if (result) {
    return dailyProgresses.map((progress) =>
      progress.date === newDailyProgress.date ? newDailyProgress : progress,
    );
  }

  return [...dailyProgresses, newDailyProgress];
}
