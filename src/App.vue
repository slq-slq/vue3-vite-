<template>
    <el-button type="primary" size="default" @click="" :icon="Plus">按钮</el-button>
    <Test />
    <SvgIcon name="ad" />
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import Test from "@/components/test.vue";
</script>

<style scoped></style>
