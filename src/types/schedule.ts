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

export interface DailySchedule {
  date: string;
  schedules: Schedule[];
}
