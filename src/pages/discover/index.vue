<template>
	<frame-set>
		<template #main>
			<y-cell-group>
				<y-cell title="这是标题" desc="这是描述" />
				<y-cell title="这是标题" desc="这是描述" @click="destroy" />
			</y-cell-group>
		</template>
		<template>
			<canvas id="lottie" class="w-[100px] h-[150px]" type="2d" />
		</template>
	</frame-set>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import lottieJson from '@/static/lottie/耳机背景.json';
import { makeCanvas, loadAnimation, type LoadAnimationReturnType } from '@/utils/lottie';

const animation = ref<LoadAnimationReturnType>();

onMounted(async () => {
	const canvas = await makeCanvas('lottie', { width: 100, height: 150 });
	animation.value = loadAnimation({
		canvas,
		data: lottieJson,
		auto: true,
		complete: () => {
			console.log('%c [ complete ]-33', 'font-size:13px; background:pink; color:#bf2c9f;', 'complete');
		},
	});
});
onUnmounted(() => {
	animation.value?.destroy();
});

const destroy = () => {
	animation.value?.destroy();
};
</script>

<style></style>
