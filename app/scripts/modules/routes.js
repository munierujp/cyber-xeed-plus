import paths from './paths'
import actions from './actions'

export default [
  {
    path: paths.ログイン画面,
    actions: [
      actions.ログイン画面で自動ログイン
    ]
  },
  {
    path: paths.勤務データ確認画面,
    actions: [
      actions.勤務データ確認画面に今月ボタンを追加
    ]
  },
  {
    path: paths.就業週報画面,
    actions: [
      actions.就業週報画面に今月ボタンを追加
    ]
  }
]
