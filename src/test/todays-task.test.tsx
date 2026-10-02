import { expect, test } from 'vitest';
import { createTodaysTask, getTaskProgress } from './todays-task';
import { Task, TodayTask } from '@/types/task';

const task: Task = {
  id: 'task-1',
  taskTitle: 'React学習',
};

test('設定済みの今日のタスクが反映される', () => {
  const result = createTodaysTask(task);
  expect(result).toEqual({
    taskId: task.id,
    completed: false,
  });
});

const taskProgress: TodayTask[] = [
  {
    taskId: task.id,
    completed: true,
  },
];

test('タスクの完了状態を反映する', () => {
  const result = getTaskProgress(taskProgress);
  expect(result).toEqual({
    taskCompleted: 1,
    total: 1,
  });
});
