<template>
	<view>欢迎</view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from '@/store';

const userStore = useUserStore();

onMounted(() => {
	if (userStore.isLogin) {
		uni.switchTab({ url: '/pages/home/index' });
	} else {
		uni.redirectTo({ url: '/pages/login/index' });
	}
});
</script>

<style></style>
