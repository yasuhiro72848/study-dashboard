import { DailySchedule, Schedule } from '@/types/schedule';

export function setSchedule(
  schedule: Schedule,
  newSchedule: Schedule,
): Schedule {
  return {
    ...schedule,
    ...newSchedule,
  };
}

export function saveDailySchedule(dailySchedule: DailySchedule): DailySchedule {
  return dailySchedule;
}

export function getDailySchedule(
  date: string,
  schedules: DailySchedule[],
): DailySchedule | undefined {
  return schedules.find((schedules) => schedules.date === date);
}
