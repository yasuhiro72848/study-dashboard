# Pomodoro Music

## PomodoroMusic

**責務(何をするのか)**

- PomodoroMusicのページ全体の表示。

**表示(何を受け取り何を返すか)**

- 受け取るデータや状態はなし。
- 各コンポーネントをPomodoroMusicに配置して表示する。

**Props(必要な要素は何か)**

- PomodoroSetting
  - FocusTime
    - Input
  - FocusMusic
    - Select (未確定)
  - ShortBreak
    - Input
  - BreakMusic
    - Select (未確定)
  - SessionLaps
    - Input
  - TotalCompleteTime
  - Pomodoro (未確定)
    - FocusElapsedTime
    - ShortBreakElapsedTime
    - CompleteSession
    - ElapsedTimeBar
    - SettingButton
- MusicPlayer

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- CurrentContents
- PomodoroSetting
- MusicPlayer

**未決事項(将来の拡張や決定できないこと)**

- なし。

## PomodoroSetting

**責務(何をするのか)**

- Pomodoroの時間と音楽の設定項目を表示する。
- 設定内容の確認のためのPomodoroタイマーを表示する。(未確定)

**表示(何を受け取り何を返すか)**

- 時間設定とセット回数
  - FocusTimeに集中時間を入力する。
  - FocusTimeから変更イベントを受け取る。
  - ShortBreakに休憩時間を入力する。
  - ShortBreakから変更イベントを受け取る。
  - SessionLapsにセット回数を入力する。
  - SessionLapsから変更イベントを受け取る。
  - ProgressHistoryから累計完了時間のデータを受け取る。
  - 受け取った累計完了時間をTotalCompleteTimeから表示する。

- 音楽の設定
  - FocusMusic/BreakMusicに音楽を選択する。
  - FocusMusic/BreakMusicから変更イベントを受け取る。

**Props(必要な要素は何か)**

- PomodoroSetting
  - FocusTime
    - Input
  - FocusMusic
    - Select (未確定)
  - ShortBreak
    - Input
  - BreakMusic
    - Select (未確定)
  - SessionLaps
    - Input
  - TotalCompleteTime
  - Pomodoro (未確定)
    - FocusElapsedTime
    - ShortBreakElapsedTime
    - CompleteSession
    - ElapsedTimeBar
    - SettingButton

**状態管理(自身か親か)**

- 集中時間
- 休憩時間
- 設定中の音楽
- セット回数

**依存関係(どのコンポーネントと連携するか)**

- ProgressHistory
- FocusTime
- FocusMusic
- ShortBreak
- BreakMusic
- SessionLaps
- TotalCompleteTime
- Pomodoro (未確定)

**未決事項(将来の拡張や決定できないこと)**

- 設定内容をユーザーが確認できるようにPomodoroタイマーを表示したい。しかし、PomodoroはMusicコンポーネントと連動しており、実装時の調整が必要なため未確定事項が多く非表示にする可能性がある。
- 設定項目の保存方法とデータの扱い方。
- FocusMusic/BreakMusicの選択UIは、将来的にSpotifyと連携した際に使わなくなる可能性があるため、MVPでは選択機能を直接持たせる方向性で検討している。

## FocusTime

**責務(何をするのか)**

- 集中時間の変更イベントを通知する。
- 集中時間を表示する。

**表示(何を受け取り何を返すか)**

- PomodoroSettingから集中時間の設定値を受け取り表示する。
- 集中時間の変更イベントを親に通知する。

**Props(必要な要素は何か)**

- 集中時間の設定値
- 変更イベント

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- PomodoroSetting
- Input

**未決事項(将来の拡張や決定できないこと)**

- なし。

## ShortBreak

**責務(何をするのか)**

- 休憩時間の変更イベントを通知する。
- 休憩時間を表示する。

**表示(何を受け取り何を返すか)**

- PomodoroSettingから休憩時間の設定値を受け取り表示する。
- 休憩時間の変更イベントを親に通知する。

**Props(必要な要素は何か)**

- 休憩時間の設定値
- 変更イベント

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- PomodoroSetting
- Input

**未決事項(将来の拡張や決定できないこと)**

- なし。

## SessionLaps

**責務(何をするのか)**

- セット回数の変更イベントを通知する。
- セット回数を表示する。

**表示(何を受け取り何を返すか)**

- PomodoroSettingからセット回数の設定値を受け取り表示する。
- セット回数の変更イベントを親に通知する。

**Props(必要な要素は何か)**

- 変更イベント
- セット回数の設定値

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- PomodoroSetting
- Input

**未決事項(将来の拡張や決定できないこと)**

- なし。

## FocusMusic

**責務(何をするのか)**

- 集中時間の音楽の選択と表示をする。
- 音楽選択UIのCSSスタイルを管理する。

**表示(何を受け取り何を返すか)**

- PomodoroSettingから音楽の設定値を受け取り表示する。
- 音楽選択の変更イベントを親に通知する。

**Props(必要な要素は何か)**

- CSSスタイル
- 変更イベント
- 音楽の設定値

**状態管理(自身か親か)**

- なし。

**依存関係(どのコンポーネントと連携するか)**

- PomodoroSetting

**未決事項(将来の拡張や決定できないこと)**

- 将来的にSpotifyの連携を予定しているが、Selectコンポーネントを共通化する可能性は否定できないため実装時に検討。

## BreakMusic

**責務(何をするのか)**

- 休憩時間の音楽の選択と表示をする。
- 音楽選択UIのCSSスタイルを管理する。

**表示(何を受け取り何を返すか)**

- PomodoroSettingから音楽の設定値を受け取り表示する。
- 音楽選択の変更イベントを親に通知する。

**Props(必要な要素は何か)**

- CSSスタイル
- 変更イベント
- 音楽の設定値

**状態管理(自身か親か)**

- なし

**依存関係(どのコンポーネントと連携するか)**

- PomodoroSetting

**未決事項(将来の拡張や決定できないこと)**

- 将来的にSpotifyの連携を予定しているが、Selectコンポーネントを共通化する可能性は否定できないため実装時に検討。

## MusicPlayer

**責務(何をするのか)**

- Spotifyの連携設定をする。

**表示(何を受け取り何を返すか)**

- 未定

**Props(必要な要素は何か)**

- 未定

**状態管理(自身か親か)**

- 未定

**依存関係(どのコンポーネントと連携するか)**

- 未定

**未決事項(将来の拡張や決定できないこと)**

- 将来的にSpotifyと連携する際に利用するコンポーネント。

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
