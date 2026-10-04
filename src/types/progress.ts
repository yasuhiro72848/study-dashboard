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
  completeTime: DailyProgress['completeTime'];
  goalTimeSetting: number;
  achievementRate: DailyProgress['achievementRate'];
}
