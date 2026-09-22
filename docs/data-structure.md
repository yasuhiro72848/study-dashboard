# Data Structure

## Task Settings

**目的**

- タスクを編集する。

**データ**

| 項目      | 型     | 内容               |
| --------- | ------ | ------------------ |
| id        | string | タスクを識別するID |
| taskTitle | string | タスク名           |

**関係性**

- タスク登録フォームからデータを受け取り表示する。
- 登録されたデータをToday's tasksに渡す。

## Today's tasks

**目的**

- Task Settingsで登録したタスクの、完了の有無を確認する。

**データ**

| 項目   | 型     | 内容                          |
| ------ | ------ | ----------------------------- |
| taskId | string | Task Settingsから受け取ったID |

- タスク完了のチェックは状態管理する。

**関係性**

- Task SettingsのtaskIdを参照して、対応するtaskTitleを表示する。
- 完了したタスクの個数をプログレスバーに反映する。

## Pomodoro Settings

**目的**

- Pomodoroに反映するデータを登録する。

**データ**

| 項目       | 型     | 内容              |
| ---------- | ------ | ----------------- |
| id         | string | 設定の識別ID      |
| focusTime  | number | Focus timeの時間  |
| focusMusic | string | Focus musicの音楽 |
| shortBreak | number | Short breakの時間 |
| breakMusic | string | Short breakの音楽 |
| Session    | number | セット回数        |

**関係性**

- 登録したデータをPomodoroに反映する。

## Pomodoro

**目的**

- Pomodoro Settingで登録したデータを反映し表示する。

**データ**

- Pomodoro Settingsのデータを使用する。
- セット数の完了状態や経過時間は状態として管理する。

**関係性**

- Pomodoro Settingsで受け取ったデータを反映する。
- 設定された時間やセット数をもとにカウントを実行する。
- 経過時間を円形プログレスバーに反映する。

##　

**目的**

- a

**データ**

| 項目 | 型  | 内容 |
| ---- | --- | ---- |
|      |     |      |
|      |     |      |

**関係性**

- a

## Progress history

**目的**

- 月間カレンダーから選択した日付に進捗データを保存する。

**データ**

| 項目            | 型     | 内容                        |
| --------------- | ------ | --------------------------- |
| id              | string | Progress historyの識別ID    |
| date            | string | 記録対象の日付              |
| completeTime    | number | 一日の累計学習時間          |
| goalTime        | number | 目標時間                    |
| achievementRate | number | completeTime/goalTimeの比率 |
| condition       | string | 今日の体調                  |
| historyMemo     | string | 今日の日記                  |

**関係性**

- Pomodoroの経過時間を受け取り、一日の累計学習時間に反映する。
- Scheduleとは別にdateを参照し、Progress historyの記録日として使用する。
- 月間カレンダーの日付とdateを照合し、Progress historyが見つかった日付にチェックを表示する。
- カレンダーで選択した日付(date)に対応するProgress historyを取得して表示する。
- DashboardのProgressからgoalTimeを受け取り保存する。

## Progress

**目的**

- 一日の進捗データを表示する。

**データ**

- Progress historyのdateを取得し、completeTime/goalTime/achievementRateを使用する。

**関係性**

- Progress historyから受け取った累計学習時間と達成率を反映する。
- goalTimeをProgress historyに渡す。

##

**目的**

- a

**データ**

| 項目 | 型  | 内容 |
| ---- | --- | ---- |
|      |     |      |
|      |     |      |

**関係性**

- a

##

**目的**

- a

**データ**

| 項目 | 型  | 内容 |
| ---- | --- | ---- |
|      |     |      |
|      |     |      |

**関係性**

- a

##

**目的**

- a

**データ**

| 項目 | 型  | 内容 |
| ---- | --- | ---- |
|      |     |      |
|      |     |      |

**関係性**

- a

##

**目的**

- a

**データ**

| 項目 | 型  | 内容 |
| ---- | --- | ---- |
|      |     |      |
|      |     |      |

**関係性**

- a
