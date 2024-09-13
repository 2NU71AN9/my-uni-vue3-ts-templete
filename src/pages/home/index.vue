<template>
  <z-paging
    ref="paging"
    v-model="dataArray"
    show-refresher-when-reload
    @query="loadData"
  >
    <view class="w-[700rpx] bg-rose-500 pad:bg-green-500">
      {{ userStore.userInfo?.libraryName ?? "哈哈哈哈" }}
      <view class="child">222222</view>
    </view>
    <view class="view1 bg-blue-500 h-[50px] w-10" />
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

<style lang="scss" scoped>
.content {
  width: 100px;
  height: 200px;
  background-color: aquamarine;

  .child {
    width: 50px;
    height: 50px;
    background-color: antiquewhite;
  }
}
.view1 {
}
.view2 {
  width: 2.5rem;
}
</style>
