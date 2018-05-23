export let treeObj = {
  doneTreeData: (apiArry, newArry, pid) => {
    apiArry.forEach(function (e) {
      if (e.pid !== pid) {
        return
      }
      let json = { id: e.id, label: e.name, url: e.url, isMenu: e.isMenu, icon: e.icon }
      json = treeObj.processChildren(apiArry, json)
      newArry.push(json)
    })
    return newArry
  },
  processChildren: (apiArry, jsonObj) => {
    let children = []
    children = treeObj.doneTreeData(apiArry, children, jsonObj.id)
    if (children.length > 0) {
      jsonObj.children = children
    }
    return jsonObj
  }
}
