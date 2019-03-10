import Val from '@munierujp/val'
import fetchConfigOrDefault from './fetchConfigOrDefault'
import routes from './routes'

export default function () {
  const actions = getActions(window.location)
  actions.forEach(action => {
    const name = action.name
    fetchConfigOrDefault(name).then(shouldExec => {
      if (shouldExec) {
        console.log(`アクション「${name}」を実行します。`)
        action.exec()
      }
    })
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
