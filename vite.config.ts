import path from "path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// start 引入tailwindcss增加的配置0
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from "weapp-tailwindcss/vite";
// 注意： 打包成 h5 和 app 都不需要开启插件配置
const isH5 = process.env.UNI_PLATFORM === "h5";
const isApp = process.env.UNI_PLATFORM === "app";
const WeappTailwindcssDisabled = isH5 || isApp;

const resolve = (p) => {
  return path.resolve(__dirname, p);
};
// end 引入tailwindcss增加的配置0

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        // tailwindcss(),
        require("tailwindcss")({
          // 注意此处，手动传入你 `tailwind.config.js` 的绝对路径
          config: resolve("./tailwind.config.js"),
        }),
        require("autoprefixer"),
      ],
    },
  },
  plugins: [
    uni(),
    // start 引入tailwindcss增加的配置plugins
    uvwt({
      rem2rpx: true,
      disabled: WeappTailwindcssDisabled,
      // 由于 hbuilderx 会改变 process.cwd 所以这里必须传入当前目录的绝对路径
      tailwindcssBasedir: __dirname,
    }),
    // end 引入tailwindcss增加的配置plugins
  ],
});
