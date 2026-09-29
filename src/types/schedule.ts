export interface DailySchedule {
  id: string;
  date: string;
  scheduleName: string;
  startTime: number;
  duration: number;
}

export interface ScheduleRegistered {
  scheduleDate: DailySchedule['date'];
  registered: boolean;
}
