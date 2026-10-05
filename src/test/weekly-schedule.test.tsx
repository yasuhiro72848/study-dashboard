import { DailySchedule, Schedule } from '@/types/schedule';
import { saveDailySchedule, setSchedule } from './weekly-schedule';
import { expect, test } from 'vitest';
import { getDailySchedule } from './weekly-schedule';

test('指定した日付にスケジュールの設定・変更ができる', () => {
  const schedule: Schedule = {
    id: 'schedule-1',
    date: '10/05',
    scheduleName: '散歩',
    startTime: 8,
    duration: 60,
  };

  const newSchedule: Schedule = {
    id: 'schedule-1',
    date: '10/06',
    scheduleName: '朝食',
    startTime: 8,
    duration: 30,
  };
  const result = setSchedule(schedule, newSchedule);

  expect(result).toEqual(newSchedule);
});

test('1日分のスケジュールをカレンダーに保存する', () => {
  const dailySchedule: DailySchedule = {
    date: '10/06',
    schedules: [
      {
        id: 'schedule-1',
        date: '10/06',
        scheduleName: '朝食',
        startTime: 8,
        duration: 30,
      },
      {
        id: 'schedule-2',
        date: '10/06',
        scheduleName: '午前学習',
        startTime: 9,
        duration: 120,
      },
    ],
  };
  const result = saveDailySchedule(dailySchedule);
  expect(result).toEqual(dailySchedule);
});

test('1日分のスケジュールをカレンダーから呼び出す', () => {
  const weeklySchedule: DailySchedule[] = [
    {
      date: '10/06',
      schedules: [
        {
          id: 'schedule-1',
          date: '10/06',
          scheduleName: '朝食',
          startTime: 8,
          duration: 30,
        },
        {
          id: 'schedule-2',
          date: '10/06',
          scheduleName: '午前学習',
          startTime: 9,
          duration: 120,
        },
      ],
    },
    {
      date: '10/07',
      schedules: [
        {
          id: 'schedule-3',
          date: '10/07',
          scheduleName: '散歩',
          startTime: 8,
          duration: 30,
        },
        {
          id: 'schedule-4',
          date: '10/07',
          scheduleName: '復習',
          startTime: 9,
          duration: 120,
        },
      ],
    },
  ];
  const result = getDailySchedule('10/07', weeklySchedule);
  expect(result).toEqual({
    date: '10/07',
    schedules: [
      {
        id: 'schedule-3',
        date: '10/07',
        scheduleName: '散歩',
        startTime: 8,
        duration: 30,
      },
      {
        id: 'schedule-4',
        date: '10/07',
        scheduleName: '復習',
        startTime: 9,
        duration: 120,
      },
    ],
  });
});
