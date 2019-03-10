import Vue from 'vue'
import Storage from './modules/Storage'
import defaultConfig from './modules/default_config'

document.addEventListener('DOMContentLoaded', () => {
  Storage.fetch(defaultConfig).then(config => {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      data: () => ({
        status: '',
        ログイン画面で自動ログイン: config.ログイン画面で自動ログイン,
        勤務データ確認画面に今月ボタンを追加: config.勤務データ確認画面に今月ボタンを追加,
        就業週報月報画面に今月ボタンを追加: config.就業週報月報画面に今月ボタンを追加,
        就業週報画面に今月ボタンを追加: config.就業週報画面に今月ボタンを追加,
        就業月報画面に今月ボタンを追加: config.就業月報画面に今月ボタンを追加,
        就業年報画面に今年ボタンを追加: config.就業年報画面に今年ボタンを追加
      }),
      methods: {
        onUpdate () {
          this.status = ''
        },
        save () {
          const config = {
            ログイン画面で自動ログイン: this.ログイン画面で自動ログイン,
            勤務データ確認画面に今月ボタンを追加: this.勤務データ確認画面に今月ボタンを追加,
            就業週報月報画面に今月ボタンを追加: this.就業週報月報画面に今月ボタンを追加,
            就業週報画面に今月ボタンを追加: this.就業週報画面に今月ボタンを追加,
            就業月報画面に今月ボタンを追加: this.就業月報画面に今月ボタンを追加,
            就業年報画面に今年ボタンを追加: this.就業年報画面に今年ボタンを追加
          }
          Storage.set(config)
          this.status = '保存しました。'
        }
      }
    })
  })
})
