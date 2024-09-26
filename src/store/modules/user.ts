import { defineStore } from 'pinia';
import UserModel from '@/model/UserModel';
import { loginApi } from '@/api/user';

export const useUserStore = defineStore('user', {
	state: () => ({
		userInfo: <UserModel | undefined>undefined,
	}),
	getters: {
		isLogin: (state) => !!state.userInfo?.token,
	},
	actions: {
		async login(mobile: string, password: string): Promise<UserModel> {
			return new Promise((resolve, reject) => {
				loginApi(mobile, password)
					.then((res) => {
						this.userInfo = res;
						resolve(res);
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
		refresh() {
			// TODO: 刷新用户信息
		},
		logout() {
			this.$reset();
			uni.reLaunch({ url: '/pages/login/index' });
		},
	},
	// 持久化
	persist: {
		storage: {
			setItem(key, value) {
				uni.setStorageSync(key, value);
			},
			getItem(key) {
				return uni.getStorageSync(key);
			},
		},
	},
});
