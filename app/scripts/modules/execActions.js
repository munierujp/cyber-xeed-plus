import Val from '@munierujp/val'
import routes from './routes'

export default function () {
  const actions = getActions(window.location)
  actions.forEach(action => {
    console.log(`アクション「${action.name}」を実行します。`)
    action.exec()
  })
}

function getActions (location) {
  return Val.of(location)
    .map(location => location.pathname)
    .map(path => findRoute(path))
    .map(route => route.actions)
    .or([])
}

function findRoute (path) {
  return routes.find(route => route.path === path)
}
