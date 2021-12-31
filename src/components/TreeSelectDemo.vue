<template>
  <TreeSelect
    v-model:value="value"
    style="width: 200px"
    :tree-data="treeData"
    treeDefaultExpandAll
    tree-checkable
    allow-clear
    :show-checked-strategy="SHOW_PARENT"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TreeSelect, TreeSelectProps } from 'ant-design-vue';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const value = ref();
const treeData = ref<TreeSelectProps['treeData']>([
  {
    title: 'parent 1',
    value: 'parent 1',
    children: [
      {
        title: 'parent 1-0',
        value: 'parent 1-0',
        children: [
          {
            title: 'my leaf',
            value: 'leaf1',
          },
          {
            title: 'your leaf',
            value: 'leaf2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        value: 'parent 1-1',
      },
    ],
  },
]);
</script>

<style lang="less" scoped></style>
