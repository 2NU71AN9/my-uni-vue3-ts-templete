<template>
	<z-paging ref="paging" v-model="dataArray" show-refresher-when-reload @query="loadData">
		<view class="w-[700rpx] h-[200rpx] bg-rose-500 text-[32rpx] pad:text-[16px]">
			{{ userStore.userInfo?.libraryName ?? '哈哈哈哈' }}
			<view class="child"> 222222 </view>
		</view>
		<view class="view1 bg-blue-500 h-[50px] w-700 text-16" v-for="i in 10" :key="i">
			嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
		</view>
		<view class="card"> 123 </view>
		<button @click="title = '123'">自定义button默认样式</button>
		<span />
		<image src="" mode="scaleToFill" />
	</z-paging>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store';

const userStore = useUserStore();
const paging = ref();
const dataArray = ref([]);
const title = ref('标题');
const prop = defineProps({
	book_id: { type: Number, default: 0 },
	directory_id: { type: Number, default: 0 },
	stage: { type: String, default: '' },
	stageValue: { type: Number, default: 0 },
});

const loadData = (e: number) => {
	console.log('🚀 ~ loadData ~ prop:', prop);
	console.log('🚀 ~ loadData ~ e:', e);
	paging.value.complete([1, 2, 3]);
	const aaaa = 1;
	console.log('🚀 ~ loadData ~ aaaa:', aaaa);
	const a = [1, 2, 3];
	console.log('🚀 ~ loadData ~ a:', a);
	if (a.length === 0) {
		return true;
	}
	// 123
	if (a.length === 3) {
		const b = 2;
		console.log('🚀 ~ loadData ~ b:', b);
		const c = function () {};
		console.log('🚀 ~ loadData ~ c:', c);
		return b;
	} else {
		return '123';
	}
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
