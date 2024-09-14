<template>
  <z-paging
    ref="paging"
    v-model="dataArray"
    show-refresher-when-reload
    @query="loadData"
  >
    <view
      class="w-[700rpx] h-[200rpx] bg-rose-500 text-[32rpx] pad:text-[16px]"
    >
      {{ userStore.userInfo?.libraryName ?? "哈哈哈哈" }}
      <view class="child">222222</view>
    </view>
    <view class="view1 bg-blue-500 h-[50px] w-700 text-16"> 嘻嘻嘻嘻嘻嘻 </view>
    <view class="card">123</view>
    <button>自定义button默认样式</button>
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
.view2 {
  width: 2.5rem;
}
</style>
