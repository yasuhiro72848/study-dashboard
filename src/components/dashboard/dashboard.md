# Dashboard

## TodaysTasks

**責務(何をするのか)**

- 今日のタスクを表示する。
- 完了したタスクをプログレスバーに表示する。

**表示(何を受け取り何を返すか)**

- TaskSettingsから追加されたタスクを受け取り、チェックリストとして表示する。
- チェックボックスの完了状態に応じてプログレスバーを更新する。

**Props(必要な要素は何か)**

- TaskSettingsから受け取るタスクのデータ
- TodaysTasks内で構成されるコンポーネント
  - TaskList
  - TaskItem
  - TaskProgressBar

**状態管理(自身か親か)**

- タスクの完了状態を管理する。

**依存関係(どのコンポーネントと連携するか)**

- TaskSettings
- TaskList
- TaskItem
- TaskProgressBar

**未決事項(将来の拡張や決定できないこと)**

- プログレスバーの計算
- タスクの追加・削除に応じた達成率の変化をどのように反映するか。

## TaskProgressBar

**責務(何をするのか)**

- タスクの完了状態をプログレスバーで表示する。

**表示(何を受け取り何を返すか)**

- TodayTasksのタスクの完了状態を受け取り、達成率を計算して表示する。

**Props(必要な要素は何か)**

- タスクの完了状態を格納した配列

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- TodaysTasks

**未決事項(将来の拡張や決定できないこと)**

- タスクの追加・削除に応じて達成率とプログレスバーをどのように反映するのか。
- 達成率の計算はTodaysTasks/TaskProgressBarのどちらが担当するのか。

## TodaysSchedule

**責務(何をするのか)**

- 今日のスケジュールを表示する。
- 表示時間範囲の設定を表示する。

**表示(何を受け取り何を返すか)**

- WeeklyScheduleから設定されたScheduleListとScheduleItemを受け取る。
- DisplayTimeSettingから表示時間を受け取る。

**Props(必要な要素は何か)**

- TodaysSchedule
  - ScheduleList
    - ScheduleItem
      - ScheduleTimeBlock
  - ScheduleTimeLine
  - DisplayTimeSchedule

**状態管理(自身か親か)**

- 今日のスケジュールの状態管理は親コンポーネントのWeeklyScheduleが管理する
- 表示時間範囲の状態は自身が管理する。

**依存関係(どのコンポーネントと連携するか)**

- WeeklySchedule
- DisplayTimeSetting
- ScheduleList

**未決事項(将来の拡張や決定できないこと)**

- 将来的にはGoogle Calendarと連携したい。

## CurrentProgress

**責務(何をするのか)**

- 累計完了時間、目標時間、達成率のプログレスバーを表示する。
- 目標時間を設定する。

**表示(何を受け取り何を返すか)**

- ProgressHistoryから累計完了時間、目標時間、達成率のデータを受け取り表示する。
- 設定済みの目標時間を再設定する。

**Props(必要な要素は何か)**

- CurrentProgress
  - TotalCompleteTime
  - GoalTimeSetting
  - AchievementBar

**状態管理(自身か親か)**

- 自身が達成率を状態管理をする。
- 目標時間の設定に応じて達成率を再計算する。

**依存関係(どのコンポーネントと連携するか)**

- ProgressHistory
- TotalCompleteTime
- GoalTimeSetting
- AchievementBar

**未決事項(将来の拡張や決定できないこと)**

- a

## a

**責務(何をするのか)**

- a

**表示(何を受け取り何を返すか)**

- a

**Props(必要な要素は何か)**

- a

**状態管理(自身か親か)**

- a

**依存関係(どのコンポーネントと連携するか)**

- a

**未決事項(将来の拡張や決定できないこと)**

- a

## a

**責務(何をするのか)**

- a

**表示(何を受け取り何を返すか)**

- a

**Props(必要な要素は何か)**

- a

**状態管理(自身か親か)**

- a

**依存関係(どのコンポーネントと連携するか)**

- a

**未決事項(将来の拡張や決定できないこと)**

- a
