import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-tree-table'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
