# StudyLog

## StudyLog

**責務(何をするのか)**

- StudyLogのコンテンツを表示する。

**表示(何を受け取り何を返すか)**

- 受け取るデータや状態はなし。
- 各コンポーネントをStudyLogに配置して表示する。

**Props(必要な要素は何か)**

- WeeklyProgress
  - AchievementBarChart
  - CompleteTimeBarChart
  - AverageTimeBarChart
  - WeeklyCompleteTime
  - WeeklyAverageTime
  - DisplayDaySetting
- ProgressHistory
  - DailyProgress
    - TotalCompleteTime
    - GoalTimeSetting
      - Input
    - AchievementBar
    - DailyCondition
      - Input
    - DailyMemo
      - Input
    - SettingButton
  - ProgressCalendar
    - MonthlyCalendar

**状態管理(自身か親か)**

- なし

**依存関係(どのコンポーネントと連携するか)**

- CurrentContents
- WeeklyProgress
- ProgressHistory

**未決事項(将来の拡張や決定できないこと)**

- なし

## WeeklyProgress

**責務(何をするのか)**

- 週間の学習進捗グラフを管理・表示する
- 週間の累計学習時間を表示する
- 週間の平均学習時間を表示する
- 表示対象の日付を選択する

**表示(何を受け取り何を返すか)**

- 日別の達成率と完了時間をProgressHistoryから受け取る。
- 達成率のグラフを表示する。
- 完了時間のグラフを表示する。
- 1日ごとの平均学習時間の変化をグラフで表示する。
- 週間の累計完了時間と平均学習時間を表示する。
- DisplayDaySettingから変更イベントを受け取り週間の表示範囲を適用する。

**Props(必要な要素は何か)**

- WeeklyProgress
  - AchievementBarChart
  - CompleteTimeBarChart
  - AverageTimeBarChart
  - WeeklyCompleteTime
  - WeeklyAverageTime
  - DisplayDaySetting

**状態管理(自身か親か)**

- 自身が状態管理する。
  - 選択した日付
  - 選択した日付を基準に7日間のデータを抽出する。
  - 抽出したデータから累計完了時間と平均学習時間を再計算する。

**依存関係(どのコンポーネントと連携するか)**

- ProgressHistory
- AchievementBarChart
- CompleteTimeBarChart
- AverageTimeBarChart
- WeeklyCompleteTime
- WeeklyAverageTime
- DisplayDaySetting

**未決事項(将来の拡張や決定できないこと)**

- 3つのバーチャートをProgressBarChartとして一括管理できるか。
- また汎用的に管理する場合、BaseBarとして統合できるか。

## AchievementBarChart

**責務(何をするのか)**

- 達成率のグラフを表示する。

**表示(何を受け取り何を返すか)**

- WeeklyProgressから達成率のデータを受け取る。
- 受け取ったデータをグラフとして表示する。

**Props(必要な要素は何か)**

- 達成率を格納した配列
- type AchievementData = {date: string; achievementRate: number;}[];

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- WeeklyProgress

**未決事項(将来の拡張や決定できないこと)**

- 汎用コンポーネントのBaseBarに依存するのか

## CompleteTimeBarChart

**責務(何をするのか)**

- 累計完了時間のグラフを表示する。

**表示(何を受け取り何を返すか)**

- WeeklyProgressから累計完了時間のデータを受け取る。
- 受け取ったデータをグラフとして表示する。

**Props(必要な要素は何か)**

- 累計完了時間を格納した配列。
- type CompleteTimeData = {date: string; completeTime: number;}[];

**状態管理(自身か親か)**

- なし

**依存関係(どのコンポーネントと連携するか)**

- WeeklyProgress

**未決事項(将来の拡張や決定できないこと)**

- 汎用コンポーネントのBaseBarに依存するのか
- 日ごとの完了時間と累積の完了時間のどちらを表示するか

## AverageTimeBarChart

**責務(何をするのか)**

- 1日ごとの平均学習時間の変化をグラフで表示する。

**表示(何を受け取り何を返すか)**

- WeeklyProgressから平均学習時間のデータを受け取る。
- 受け取ったデータをグラフとして表示する。

**Props(必要な要素は何か)**

- 平均学習時間を格納した配列。
- type AverageTimeData = {date: string; averageTime: number;}[];

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- WeeklyProgress

**未決事項(将来の拡張や決定できないこと)**

- 汎用コンポーネントのBaseBarに依存するのか
- 1日ごとのデータに疎な配列がある場合の対応

## WeeklyCompleteTime

**責務(何をするのか)**

- 週間の累計学習時間を表示する。

**表示(何を受け取り何を返すか)**

- WeeklyProgressから、週間の累計学習時間を受け取り表示する。

**Props(必要な要素は何か)**

- 週間の累計学習時間のデータ

**状態管理(自身か親か)**

- なし

**依存関係(どのコンポーネントと連携するか)**

- WeeklyProgress

**未決事項(将来の拡張や決定できないこと)**

- なし

## WeeklyAverageTime

**責務(何をするのか)**

- 週間の平均学習時間を表示する。

**表示(何を受け取り何を返すか)**

- WeeklyProgressから週間の平均学習時間を受け取り表示する。

**Props(必要な要素は何か)**

- 週間の平均学習時間のデータ

**状態管理(自身か親か)**

- なし

**依存関係(どのコンポーネントと連携するか)**

- WeeklyProgress

**未決事項(将来の拡張や決定できないこと)**

- なし

## DisplayDaySetting

**責務(何をするのか)**

- 日付の表示範囲を設定する

**表示(何を受け取り何を返すか)**

- WeeklyProgressから日付の設定値を受け取る
- 変更イベントをWeeklyProgressへ通知する。

**Props(必要な要素は何か)**

- 設定変更イベント。
- 開始日時
- 表示する期間

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- WeeklyProgress

**未決事項(将来の拡張や決定できないこと)**

- 将来的には表示範囲を7日間だけでなく月間や年間に対応したい。

## ProgressHistory

**責務(何をするのか)**

- 日別の進捗データの設定管理と表示。
- 月間カレンダーの表示と進捗データの登録状況の表示。
- 体調やメモの入力と表示。
- 進捗データの保存・削除ボタンの表示。

**表示(何を受け取り何を返すか)**

- 完了時間
  - Pomodoroから完了時間のデータを受け取る。
  - 受け取った完了時間の合計を表示する。

- 目標時間
  - CurrentProgressから目標時間を受け取る。
  - ProgressHistoryのフォーム入力から目標時間を受け取る。
  - 受け取った目標時間を表示する。

- 体調・メモの入力フォーム
  - DailyConditionで体調を入力する。
  - DailyMemoでメモを入力する。
  - DailyCondition / DailyMemo から変更イベントを受け取り表示する。

- 月間カレンダー
  - ProgressCalendarから日付の変更イベントを受け取り、対応する日付の進捗データを表示する。
  - SettingButtonから登録・削除の変更イベントを受け取り、対応する日付にアイコンを表示する。

**Props(必要な要素は何か)**

- ProgressHistory
  - DailyProgress
    - TotalCompleteTime
    - GoalTimeSetting
      - Input
    - AchievementBar
    - DailyCondition
      - Input
    - DailyMemo
      - Input
    - SettingButton
  - ProgressCalendar
    - MonthlyCalendar

**状態管理(自身か親か)**

- 現在の完了時間
- 現在の目標時間
- Condition/Memoの入力状態
- 月間カレンダーの日付選択
- 選択した日付に対応する進捗データの表示
- 進捗データの登録状態

**依存関係(どのコンポーネントと連携するか)**

- DailyProgress
- ProgressCalender

**未決事項(将来の拡張や決定できないこと)**

- 完了時間・目標時間のデータ保存のタイミング。表示をする際のデータはいつ保存されたものか。

## DailyProgress

**責務(何をするのか)**

- 選択された日付の進捗データの表示。

**表示(何を受け取り何を返すか)**

- ProgressHistoryから選択された日付と、その日付に対応する進捗データを受け取る。
- 受け取ったデータをもとに、その日の進捗内容を表示する。
- Condition/Memoの変更イベントを親に通知する。

**Props(必要な要素は何か)**

- 日付と進捗データ

- DailyProgress
  - TotalCompleteTime
  - GoalTimeSetting
    - Input
  - AchievementBar
  - DailyCondition
    - Input
  - DailyMemo
    - Input
  - SettingButton

**状態管理(自身か親か)**

- なし

**依存関係(どのコンポーネントと連携するか)**

- ProgressHistory
- TotalCompleteTime
- GoalTimeSetting
- AchievementBar
- DailyCondition
- DailyMemo
- SettingButton

**未決事項(将来の拡張や決定できないこと)**

- なし

## DailyCondition

**責務(何をするのか)**

- 選択された日付の体調を設定する。

**表示(何を受け取り何を返すか)**

- DailyProgressから体調の設定値を受け取る。
- Conditionを表示する。
- DailyProgressに変更イベントを通知する。

**Props(必要な要素は何か)**

- DailyCondition
  - Input

**状態管理(自身か親か)**

- なし

**依存関係(どのコンポーネントと連携するか)**

- DailyProgress
- Input

**未決事項(将来の拡張や決定できないこと)**

- なし

## DailyMemo

**責務(何をするのか)**

- 選択された日付のメモを設定する。

**表示(何を受け取り何を返すか)**

- DailyProgressからメモの設定値を受け取る。
- Memoを表示する。
- DailyProgressに変更イベントを通知する。

**Props(必要な要素は何か)**

- DailyMemo
  - Input

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- DailyProgress
- Input

**未決事項(将来の拡張や決定できないこと)**

- なし

## ProgressCalendar

**責務(何をするのか)**

- 進捗データ用の月間カレンダーを表示する。
- 日付選択の変更イベントの管理

**表示(何を受け取り何を返すか)**

- ProgressHistoryから進捗データと日付を格納した配列を受け取り、登録状況を表示する。
- 選択された日付の変更イベントをProgressHistoryに通知する。

**Props(必要な要素は何か)**

- 進捗データと日付の配列

**状態管理(自身か親か)**

- 選択された日付の状態管理

**依存関係(どのコンポーネントと連携するか)**

- ProgressHistory
- MonthlyCalendar

**未決事項(将来の拡張や決定できないこと)**

- なし。

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
