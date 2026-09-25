# Component Design

## Dashboard Page

**Today's tasks**

- 役割
  - 今日のタスクを表示する。
  - 完了したタスクをプログレスバーに表示する。

- 構成
  - TaskList
  - TaskItem
  - TaskProgressBar

- データ

| 項目      | 型      | 内容             |
| --------- | ------- | ---------------- |
| completed | boolean | タスクの完了状態 |

**Today's schedule**

- 役割
  - 今日のスケジュールを表示する。
  - 表示時間範囲を設定する。

- 構成
  - ScheduleList
  - ScheduleItem
  - DisplayTimeSetting

- 状態
  - セレクトボックスによる表示時間範囲

**Progress**

- 役割
  - 累計完了時間、目標時間、達成率のプログレスバーを表示する。

- 構成
  - TotalCompleteTime
  - GoalTimeSetting
  - AchievementBar

- データ

| 項目     | 型     | 内容           |
| -------- | ------ | -------------- |
| goalTime | number | 目標時間の設定 |

- 状態
  - 目標時間の設定
  - 目標時間の変更に応じて達成率が変化する。

**Pomodoro**

- 役割
  - a

- 構成
  - a

**Music**

- 役割
  - a

- 構成
  - a

## Schedule / Tasks Page

**Weekly Schedule**

- 役割
  - a

- 構成
  - a

**Task Settings**

- 役割
  - a

- 構成
  - a

**Schedule Calender**

- 役割
  - a

- 構成
  - a

## Study Log Page

**Weekly Progress**

- 役割
  - a

- 構成
  - a

**Progress History**

- 役割
  - a

- 構成
  - a

## Pomodoro & Music Page

**Pomodoro Setting**

- 役割
  - a

- 構成
  - a

**Music player**

- 役割
  - a

- 構成
  - a

## Common Components

---
