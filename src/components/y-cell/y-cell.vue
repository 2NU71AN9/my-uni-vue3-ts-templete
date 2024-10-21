<template>
	<view
		class="cell bg-bg-white flex items-center gap-[12rpx] pad:gap-[10px] p-[24rpx] pad:p-[12px] active"
		@click="onClick"
	>
		<text v-if="icon" class="iconfont text-primary text-[36rpx] pad:text-[18px]" :class="icon" />
		<text class="flex-auto text-[28rpx] pad:text-[14px] line-clamp-1 w-px">{{ title }}</text>
		<text v-if="desc" class="text-[26rpx] pad:text-[13px] text-text-gray line-clamp-1">{{ desc }}</text>
		<text v-if="arrow" class="iconfont icon-right text-text-gray text-[24rpx] pad:text-[12px]" />
	</view>
</template>

<script setup lang="ts">
const prop = defineProps({
	icon: { type: String, default: '' },
	title: { type: String, default: '' },
	desc: { type: String, default: '' },
	arrow: { type: Boolean, default: true },
	link: { type: String, default: '' },
	line: { type: Boolean, default: false },
});
const emit = defineEmits(['click']);

const onClick = () => {
	prop.link && uni.navigateTo({ url: prop.link });
	emit('click');
};
</script>

<script lang="ts">
export default {
	options: {
		virtualHost: true, // 将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定
	},
};
</script>

<style lang="scss" scoped>
.cell:nth-child(n) {
	border-bottom: 1px solid var(--line-color);
}
.cell:last-child {
	border-bottom: none;
}
</style>
