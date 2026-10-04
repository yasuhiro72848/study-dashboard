export interface Schedule {
  id: string;
  date: string;
  scheduleName: string;
  startTime: number;
  duration: number;
}

export interface ScheduleRegistered {
  scheduleDate: Schedule['date'];
  registered: boolean;
}

// WeeklySchedule 実装時に必要になる可能性
// WeeklySchedule: DailySchedule[]

// interface DailySchedule {
//   schedules: Schedule[];
//   id: string
// }
