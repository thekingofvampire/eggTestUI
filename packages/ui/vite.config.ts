import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Eggtestuiui',
      fileName: 'eggtestui-ui',
    },
    // 禁止混淆
    minify: false,

    rollupOptions: {
      external: [/@eggtestui.*/, 'vue'],
      // output: {}
    },
  },
});
