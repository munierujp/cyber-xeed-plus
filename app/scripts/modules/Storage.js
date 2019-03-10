export default class {
  static fetch (keys) {
    return new Promise(resolve => chrome.storage.sync.get(keys, items => resolve(items)))
  }

  static set (items) {
    chrome.storage.sync.set(items)
  }
}
