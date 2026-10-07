import { expect, test } from 'vitest';
import { addTask, deleteTask } from './task-setting';
import { Task } from '@/types/task';

test('タスクを追加する', () => {
  const task: Task = {
    id: 'task-1',
    taskTitle: 'React学習',
  };

  const result = addTask(task);

  expect(result).toEqual({
    id: 'task-1',
    taskTitle: 'React学習',
  });
});

test('設定済みのタスクを削除する', () => {
  const taskList: Task[] = [
    {
      id: 'task-1',
      taskTitle: 'React学習',
    },
    {
      id: 'task-2',
      taskTitle: 'TypeScript学習',
    },
  ];

  const result = deleteTask(taskList, 'task-2');

  expect(result).toEqual([
    {
      id: 'task-1',
      taskTitle: 'React学習',
    },
  ]);
});
