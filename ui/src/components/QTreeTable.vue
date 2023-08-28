<template>
  <q-table v-bind="$attrs" :rows="treeData">
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps" />
    </template>
    <template v-slot:[`body-cell-${col1}`]="props">
      <q-td :props="props">
        <div :style="{ display: 'inline-block', width: props.row.__level * size + 'px' }" />
        <div v-if="!(props.row.children && props.row.children.length)" :style="{ display: 'inline-block', width: size + 'px' }" />
        <q-btn v-else-if="this.$attrs.dense == ''" flat dense size="sm" padding="none" :icon="this.icon[Number(props.row.__isExpanded)]" @click="toggleRow(props.row)" />
        <q-btn v-else flat dense :icon="this.icon[Number(props.row.__isExpanded)]" @click="toggleRow(props.row)" />
        <slot :name="'body-cell-' + col1" :props="props">
          {{ props.row[col1] }}
        </slot>
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  name: "QTreeTable",
  props: {
    rows: {
      type: Array,
      required: true,
    },
    icon: {
      type: Array,
      default: () => {
        return ["add", "remove"];
      },
    },
  },
  data: () => ({
    treeData: [],
  }),
  methods: {
    toggleRow(row) {
      let index = this.treeData.indexOf(row);
      if (index < 0) {
        return;
      }
      let nextNotDescendant = index + 1;
      for(; nextNotDescendant < this.treeData.length; nextNotDescendant++) {
        if(this.treeData[index].__level >= this.treeData[traveler].__level) {
          break;
        }
      }
      if (row.__isExpanded) {
        this.treeData.splice(index + 1, nextNotDescendant - index - 1);
      } else {
        this.treeData.splice(index + 1, 0, ...row.children);
      }
      row.__isExpanded = !row.__isExpanded;
    },
    addTreeProperties(rows, level = 0, isExpanded = false) {
      return rows.map((row) => {
        if (row.children && row.children.length > 0) {
          row.children = this.addTreeProperties(row.children, level + 1, isExpanded);
        }
        return {
          ...row,
          __isExpanded: isExpanded,
          __level: level,
        };
      });
    },
  },
  computed: {
    col1() {
      return this.$attrs.columns[0].name;
    },
    size() {
      return this.$attrs.dense == "" ? 16 : 32;
    },
  },
  watch: {
    rows: {
      handler() {
        this.treeData = this.rows;
        this.treeData = this.addTreeProperties(this.treeData);
      },
      immediate: true,
    },
  },
};
</script>
