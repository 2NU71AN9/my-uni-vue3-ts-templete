import { defineStore } from "pinia";

export const useDeviceStore = defineStore("device", {
  state: () => ({
    deviceInfo: uni.getWindowInfo(),
  }),
  getters: {
    safeAreaInset: (state) => ({
      top: Math.max(
        state.deviceInfo.safeArea.top,
        state.deviceInfo.statusBarHeight
      ),
      left: state.deviceInfo.safeArea.left,
      right: state.deviceInfo.screenWidth - state.deviceInfo.safeArea.right,
      bottom: state.deviceInfo.screenHeight - state.deviceInfo.safeArea.bottom,
    }),
    naviBarHeight: (state) => state.deviceInfo.statusBarHeight + 44,
    tabBarHeight(state): number {
      return this.safeAreaInset.bottom + 44;
    },
    orientation: (state) =>
      state.deviceInfo.screenWidth > state.deviceInfo.screenHeight
        ? "landscape"
        : "portrait",
    isPortrait(): boolean {
      return this.orientation === "portrait";
    },
    isLandscape(): boolean {
      return this.orientation === "landscape";
    },
    isPad: (state) => state.deviceInfo.screenWidth > 430,
  },
  actions: {
    windowResize() {
      this.deviceInfo = uni.getWindowInfo();
      console.log("windowResize", this.deviceInfo);
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
