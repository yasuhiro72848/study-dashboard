import { expect, test } from 'vitest';
import { Schedule } from '@/types/schedule';
import { getTodaySchedule } from './todays-schedule';

const schedules: Schedule[] = [
  {
    id: 'schedule-1',
    date: '10/04',
    scheduleName: '散歩',
    startTime: 8,
    duration: 60,
  },
  {
    id: 'schedule-2',
    date: '10/04',
    scheduleName: '午前学習',
    startTime: 9,
    duration: 120,
  },
  {
    id: 'schedule-3',
    date: '10/05',
    scheduleName: '午前学習',
    startTime: 9,
    duration: 120,
  },
];

test('設定済みの今日のスケジュールが反映される', () => {
  const result = getTodaySchedule(schedules, '10/04');
  expect(result).toEqual([
    {
      id: 'schedule-1',
      date: '10/04',
      scheduleName: '散歩',
      startTime: 8,
      duration: 60,
    },
    {
      id: 'schedule-2',
      date: '10/04',
      scheduleName: '午前学習',
      startTime: 9,
      duration: 120,
    },
  ]);
});
