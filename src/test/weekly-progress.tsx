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

export function getWeeklyAverageTime(totalCompleteTime: number, days: number) {
  return days === 0 ? 0 : totalCompleteTime / days;
}

// 記録が存在する場合の平均
// export function getDailyAverageTime(
//   progresses: DailyProgress[],
//   totalCompleteTime: number,
// ) {
//   return progresses.length === 0 ? 0 : totalCompleteTime / progresses.length;
// }
