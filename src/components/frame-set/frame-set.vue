<template>
	<view class="container" :style="`flex-direction: ${isPortrait ? 'column' : 'row'}`">
		<view class="main-view" :style="isPortrait ? 'flex: none' : `flex:${props.rate}`">
			<slot name="main" />
		</view>
		<view class="line" v-if="!isPortrait" />
		<view class="sub-view" :style="isPortrait ? 'flex: auto' : `flex:${10 - props.rate}`">
			<slot />
		</view>
	</view>
</template>

<script setup lang="ts">
import { toRefs, onMounted } from 'vue';
import { useDeviceStore } from '@/store';

const props = defineProps({
	// 左右分栏时MainView的占比, 一共10份
	rate: {
		type: Number,
		default: 6.5,
	},
});
const deviceStore = useDeviceStore();
const { isPortrait } = toRefs(deviceStore);

onMounted(() => {
	console.log(deviceStore.isPortrait);
});
</script>

<style lang="scss" scoped>
.container {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: stretch;
	gap: 0;
}

.line {
	flex: none;
	width: 1px;
	height: 100%;
	background-color: rgb(242, 241, 241);
}
</style>
