<template>
	<tm-button color="pink" :margin="[10]" :shadow="0" label="退出登录" @click="userStore.logout()" />
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useUserStore } from '@/store';
const userStore = useUserStore();
</script>

<style></style>
