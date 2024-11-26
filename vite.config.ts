import { fileURLToPath, URL } from 'node:url'
import { viteMockServe } from 'vite-plugin-mock'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteImagemin from 'vite-plugin-imagemin' // 引入图片相关
import { visualizer } from 'rollup-plugin-visualizer' //用于分析打包后文件的结构，会自动生成一个打包后图
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        // mockPath: './mock/', //解析根目录下的mock文件夹
        localEnabled: true,
        prodEnabled: true,
        supportTs: false,
        logger: false,
        mockPath: './src/mock'
      }),
      // 图片压缩
      viteImagemin({
        // 无损压缩配置，无损压缩下图片质量不会变差
        optipng: {
          optimizationLevel: 8
        },
        // svg 优化
        svgo: {
          plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs', active: false }]
        }
      }),
      visualizer()
    ],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称

          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称

          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          manualChunks: {
            echarts: ['echarts']
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/assets/less/color.less";`
        }
      }
    },

    server: {
      host: true
    }
    //   proxy: {
    //     '/api': {
    //       target: 'http://172.18.72.16:8041',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  }
})
