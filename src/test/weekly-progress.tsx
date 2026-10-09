import { DailyProgress } from '@/types/progress';

export function getDateRange(
  progresses: DailyProgress[],
  startDate: string,
  endDate: string,
) {
  return progresses.filter(
    (progress) => progress.date >= startDate && progress.date <= endDate,
  );
}

export function getTotalCompleteTime(progresses: DailyProgress[]) {
  return progresses.reduce(
    (total, progress) => total + progress.completeTime,
    0,
  );
}

export function getAverageTime(totalCompleteTime: number, days: number) {
  return days === 0 ? 0 : totalCompleteTime / days;
}

// 計算結果を日付に対応する必要がある
export function getCumulativeTime(
  previousCompleteTime: number,
  currentCompleteTime: number,
) {
  return previousCompleteTime + currentCompleteTime;
}

export function getAchievementRate(progresses: DailyProgress[]) {
  return progresses.map((progress) => ({
    date: progress.date,
    achievementRate: progress.achievementRate,
  }));
}

export function getCompleteTime(progresses: DailyProgress[]) {
  return progresses.map((progress) => ({
    date: progress.date,
    completeTime: progress.completeTime,
  }));
}

// 記録が存在する場合の平均
// export function getDailyAverageTime(
//   progresses: DailyProgress[],
//   totalCompleteTime: number,
// ) {
//   return progresses.length === 0 ? 0 : totalCompleteTime / progresses.length;
// }
