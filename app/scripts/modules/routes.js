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
    path: paths.就業週報画面,
    actions: [
      actions.就業週報画面に今月ボタンを追加
    ]
  }
]
