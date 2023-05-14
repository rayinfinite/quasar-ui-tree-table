import QTreeTable from './components/QTreeTable.vue'

import { version } from '../package.json'

function install (app) {
  app.component(QTreeTable.name, QTreeTable)

}

export {
  version,
  QTreeTable,

  install
}
