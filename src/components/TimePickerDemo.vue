<template>
  <TimePicker @change="onChange"></TimePicker>
</template>

<script lang="ts" setup>
import { Dayjs } from 'dayjs';
import { TimePicker } from 'ant-design-vue';

function onChange(time: Dayjs | string) {
  //
}
</script>

<style lang="less" scoped></style>
