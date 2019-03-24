import fetchConfigOrDefault from '../modules/fetchConfigOrDefault'
import findMenuFrameDocument from '../modules/findMenuFrameDocument'

export default function () {
  fetchConfigOrDefault('ホーム画面から自動リダイレクトする先の画面名').then(viewName => {
    window.addEventListener('load', () => {
      const link = findLinkElement(viewName)
      if (link) {
        link.click()
      } else {
        console.error(`「${viewName}」という画面が見つかりません。`)
      }
    })
  })
}

function findLinkElement (viewName) {
  const menuFrame = findMenuFrameDocument()
  if (menuFrame) {
    const links = Array.from(menuFrame.querySelectorAll('a[target="FRAME2"]'))
    return links.find(link => link.title === viewName)
  }
}
