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

- Task Settingsから受け取ったデータを参照する。

**関係性**

- Task SettingsのtaskIdを参照して、対応するtaskTitleを表示する。
- タスク完了のチェックは状態管理する。
- 完了したタスクの個数をプログレスバーに反映する。

## Pomodoro Settings

**目的**

- Pomodoroに反映するデータを登録する。

**データ**

| 項目       | 型     | 内容                            |
| ---------- | ------ | ------------------------------- |
| id         | string | 設定の識別ID                    |
| focusTime  | number | Focus timeの時間                |
| focusMusic | string | Focus中に再生する音楽のID       |
| shortBreak | number | Short breakの時間               |
| breakMusic | string | Short break中に再生する音楽のID |
| Session    | number | セット回数                      |

**関係性**

- 登録したデータをPomodoroに反映する。
- Musicから音楽データを受け取り表示する。

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

## Weekly Schedule

**目的**

- 週間スケジュールの管理とスケジュールの編集。

**データ**

| 項目         | 型     | 内容                   |
| ------------ | ------ | ---------------------- |
| id           | string | スケジュールの識別ID   |
| date         | string | 記録対象の日付         |
| scheduleName | string | スケジュールのタイトル |
| startTime    | number | スケジュールの開始時間 |
| duration     | number | スケジュールの継続時間 |

**関係性**

- Schedule Calendarから日付を参照し週間スケジュールに反映する。
- Scheduleデータは日単位で管理する。

## Today's Schedule

**目的**

- 今日のスケジュールを確認。

**データ**

- Weekly Scheduleのデータを使用する。

**関係性**

- dateから今日の日付のスケジュールを取得して表示する。

## Calender (Schedule)

**目的**

- スケジュール用カレンダーの管理

**データ**

- Scheduleのデータを使用する。

**関係性**

- Scheduleのdateを参照して、カレンダーにデータの状態を反映する。

## Calender (Progress)

**目的**

- Progress History用カレンダーの管理

**データ**

- Progress Historyのデータを使用する。

**関係性**

- Progress Historyのdateを参照して、カレンダーにデータの状態を反映する。

## Music player

**目的**

- Spotifyの連携。

**データ**

- MVPでは実装しない。

**関係性**

- Spotifyからアカウント情報を取得しSpotifyのUIを表示する。

## Music (dashboard)

**目的**

- デフォルトの音楽再生

**データ**

| 項目       | 型     | 内容               |
| ---------- | ------ | ------------------ |
| id         | string | 音楽の識別ID       |
| musicTitle | string | 音楽のタイトル     |
| musicSrc   | string | 音楽ファイルのパス |

**関係性**

- デフォルトで用意された音楽データを受け取り再生する。
- 音楽の再生状況は状態で管理する。

## Current Date and Time

**目的**

- 日付と時計を表示する

**データ**

- MVPでは天気APIと連携しない。

**関係性**

- 現在の日付と時刻を取得して表示する。
- 各ページで共通コンポーネントとして利用する。
- 天気APIと連携しアイコンを表示する。

##

**目的**

- あ

**データ**

| 項目 | 型  | 内容 |
| ---- | --- | ---- |
|      |     |      |
|      |     |      |

**関係性**

- a
