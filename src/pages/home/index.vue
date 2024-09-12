<template>
  <z-paging
    ref="paging"
    v-model="dataArray"
    show-refresher-when-reload
    @query="loadData"
  >
    <view>{{ userStore.userInfo?.libraryName ?? "哈哈哈哈" }}</view>
  </z-paging>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/store";

const userStore = useUserStore();
const paging = ref();
const dataArray = ref([]);
const loadData = () => {
  paging.value.complete([1, 2, 3]);
};
</script>

<style></style>
