export interface DailyProgress {
  id: string;
  date: string;
  completeTime: number;
  goalTime: CurrentProgress['goalTimeSetting'];
  achievementRate: number;
  condition: string;
  historyMemo: string;
}

export interface CurrentProgress {
  progressDate: DailyProgress['date'];
  goalTimeSetting: number;
}
