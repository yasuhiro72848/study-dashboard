import { Schedule } from '@/types/schedule';

export function getTodaySchedule(
  schedules: Schedule[],
  date: string,
): Schedule[] {
  return schedules.filter((schedule) => schedule.date === date);
}
