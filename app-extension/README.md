# Quasar App Extension QTreeTable

QTreeTable is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It can display tree structure data in Table. 

> QTreeTable is a type of data table that displays hierarchical data in a tree-like structure, allowing users to view and manipulate data with parent-child relationships. It presents data in rows and columns, where each row represents a node in the tree and each column represents a specific attribute or property of the node.

[![npm](https://img.shields.io/npm/v/quasar-app-extension-tree-table.svg?label=quasar-app-extension-tree-table)](https://www.npmjs.com/package/quasar-app-extension-tree-table)
[![npm](https://img.shields.io/npm/dt/quasar-app-extension-tree-table.svg)](https://www.npmjs.com/package/quasar-app-extension-tree-table)

Compatible with Quasar UI v2 and Vue 3.

# How to use
QTreeTable is a component that allows you to display tree data in table. It use columns and rows properties like basic [QTable](https://quasar.dev/vue-components/table#defining-the-columns), and rows use its field key `children` to define its children. 
Because QTreeTable is developed based on QTable, so you can use most [api of QTable](https://quasar.dev/vue-components/table#qtable-api).
There is one new props `icon` is a array contain 2 element respectively for the icon appear when row not expanded and expanded. The default value is `["add", "remove"]` and you can use `['keyboard_arrow_right', 'keyboard_arrow_down']` to have a try. 

# Diff from [QHierarchy](https://github.com/pratik227/quasar-qhierarchy)
[QHierarchy](https://github.com/pratik227/quasar-qhierarchy) is using QMarkupTable, but this one is using QTable and can use [api of QTable](https://quasar.dev/vue-components/table#qtable-api). And this one have a better UI interface if using `dense`. 

# Install
```bash
quasar ext add tree-table
```
Quasar CLI will retrieve it from NPM and install the extension.

# Uninstall
```bash
quasar ext remove tree-table
```

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) ray <rayinfinite@hotmail.com>
