export interface Task {
  id: string;
  taskTitle: string;
}

export interface TodayTask {
  taskId: Task['id'];
  completed: boolean;
}
