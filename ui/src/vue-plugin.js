import QTreeTable from './components/QTreeTable.vue'


const version = __UI_VERSION__

function install (app) {
  app.component(QTreeTable.name, QTreeTable)

}

export {
  version,
  QTreeTable,

  install
}
