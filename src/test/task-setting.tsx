import { Task } from '@/types/task';

export function addTask(task: Task): Task {
  return task;
}

export function deleteTask(tasks: Task[], taskId: string): Task[] {
  return tasks.filter((task) => task.id !== taskId);
}
