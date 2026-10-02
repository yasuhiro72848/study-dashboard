import { Task, TodayTask } from '@/types/task';

export function createTodaysTask(task: Task): TodayTask {
  return {
    taskId: task.id,
    completed: false,
  };
}

export function getTaskProgress(todayTasks: TodayTask[]) {
  const taskCompleted = todayTasks.filter((task) => task.completed).length;

  return {
    taskCompleted,
    total: todayTasks.length,
  };
}
