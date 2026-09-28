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
  - Focus time、ShortBreak、セット回数の表示と経過時間をプログレスバーに表示する。

- 構成
  - FocusElapsedTime
  - CompleteSession
  - ElapsedTimeBar

- 状態
  - 経過時間とセット回数が進行に応じてプログレスバーが変化する。

**Music**

- 役割
  - 設定された音楽を再生し、「楽曲タイトル」「再生状況」「再生コントロール」を表示する。

- 構成
  - MediaControls
  - MediaBar

- 状態
  - 再生中の楽曲とコントロールがプログレスバーに反映される。

## Schedule / Tasks Page

**Weekly Schedule**

- 役割
  - スケジュールのタイムラインとブロックの表示と表示範囲の設定。

- 構成
  - ScheduleTimeBlock
  - ScheduleTimeLine
  - DisplayTimeSetting

- 状態
  - DisplayTimeSettingの設定に応じてタイムラインの表示範囲が変化する。
  - スケジュールの開始時間と継続時間に応じてScheduleTimeBlockの位置・サイズが変化する。

**Task Settings**

- 役割
  - タスクの追加・削除と登録中のタスクを表示

- 構成
  - TaskList
  - TaskItem
  - AddTaskForm

- 状態
  - 登録済みタスクの有無に応じた表示の変化。

**Schedule Calendar**

- 役割
  - スケジュール用の月間カレンダーの表示

- 構成
  - ScheduleCalendar

- データ

| 項目       | 型      | 内容                   |
| ---------- | ------- | ---------------------- |
| registered | boolean | スケジュールの登録状態 |

- 状態
  - 月間カレンダーにスケジュールの登録状態を表示する。

## Study Log Page

**Weekly Progress**

- 役割
  - 週間の学習進捗グラフと、週間累計学習時間、週間平均学習時間の表示。

- 構成
  - ProgressBarChart
  - WeeklyStudyTime
  - DisplayDaySetting

- 状態
  - 選択した日付を基準に7日間のProgressBarChartとWeeklyStudyTimeの表示が変化する。

**Progress History**

- 役割
  - 月間カレンダーに進捗データの登録・削除をする。

- 構成
  - ProgressCalendar
  - DailyProgress

- 状態
  - DailyProgressの登録状態に応じて、ProgressCalendarの表示が変化する。

## Pomodoro & Music Page

**Pomodoro Setting**

- 役割
  - Pomodoroの時間設定と音楽の選択。

- 構成
  - PomodoroSetting

- 状態
  - PomodoroSettingの設定内容に応じてPomodoroの表示が変化する。

**Music player**

- 役割
  - Spotifyの連携設定。

- 構成
  - MVPでは実装しない

## Common Components

**MonthlyCalendar**

- 役割
  - ScheduleCalendarとProgressCalenderに共通する月間カレンダー

- 状態
  - 状態の所有は親コンポーネントに持たせる。表示と日付選択の提供をする。

**DateAndTime**

- 役割
  - 今日の日付と時間のリアルタイム表示

- 状態
  - 現在時刻の表示を更新する。

- 補足
  - WeatherAPIはMVPで実装しない

**SettingsButton**

- 役割
  - 設定画面で使用する汎用操作ボタン

- 状態
  - 開始と停止、登録と解除などの状態は親が持つ。

**Card**

- 役割
  - Uiを表示するためのカード

- 状態
  - なし

**Input**

- 役割
  - 文字列の入力フォーム

- 状態
  - 状態は親コンポーネントが管理する。入力値のバリデーション・エラー表示に対応する。

**Select**

- 役割
  - セレクトボックスの共通UI

- 状態
  - なし

**BaseBar**

- 役割
  - 複数のBarに共通する表示UIを管理する。

- 構成
  - ProgressBar
  - AchievementBar
  - ElapsedTimeBar
  - MediaBar

- 備考
  - 判別ユニオンの共通化ができる可能性があるが、値や計算方法が異なるため実装時に確認する必要がある。
