const path = require("path");
const resolve = (p) => {
  return path.resolve(__dirname, p);
};

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"].map(resolve),
  theme: {
    screens: {
      pad: "431px",
      ...defaultTheme.screens,
    },
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    extend: {
      // 字体大小
      fontSize: ({ theme }) => ({
        ...theme("spacing"),
      }),
      // 行高
      lineHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      // 自定义组件
      addBase({
        button: { color: theme("colors.orange.700") },
      });
      // 自定义样式
      addComponents({
        ".card": {
          display: "inline-block",
          padding: "1rem",
          border: "10px solid",
          borderRadius: "4px",
          borderColor: theme("colors.red.400"),
          margin: "1rem",
        },
      });
    }),
  ],
  corePlugins: {
    // 跨多端可以 h5 开启，小程序关闭
    preflight: false,
  },
  presets: [
    require("tailwindcss-rem2px-preset").createPreset({
      fontSize: 16,
      // 转化的单位  px / rpx
      unit: "px",
    }),
  ],
};
