<template>
  <tm-input v-model="form.mobile" placeholder="请输入手机号" />
  <tm-input v-model="form.password" placeholder="请输入密码" />
  <tm-button
    color="pink"
    :margin="[10]"
    :shadow="0"
    label="登录"
    :loading="loading"
    @click="onLogin"
  />
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useUserStore } from "@/store";

const userStore = useUserStore();
const form = reactive({
  mobile: "13066014516",
  password: "123456",
});
const loading = ref(false);
const onLogin = () => {
  loading.value = true;
  userStore
    .login(form.mobile, form.password)
    .then(() => {
      uni.switchTab({ url: "/pages/home/index" });
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style></style>
