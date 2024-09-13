const path = require("path");

const resolve = (p) => {
  return path.resolve(__dirname, p);
};

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"].map(resolve),
  theme: {
    screens: {
      pad: "431px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // 跨多端可以 h5 开启，小程序关闭
    preflight: false,
  },
  presets: [
    require("tailwindcss-rem2px-preset").createPreset({
      fontSize: 32,
      // 转化的单位  px / rpx
      unit: "px",
    }),
  ],
};
