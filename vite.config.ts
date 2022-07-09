import { rmSync } from 'fs'
import { join, resolve as resolvePath } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron/renderer'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default ( { mode } ) => defineConfig({
  define: {
    'process.env': loadEnv(mode, process.cwd())
  },
  resolve: {
    alias: {
      '@': resolvePath(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolvePath(process.cwd(), 'src/assets/icons/svg')],
      symbolId: 'icon-[dir]-[name]'
    }),
    Components({
      resolvers: [
        AntDesignVueResolver()
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    electron({
      main: {
        entry: 'electron/main/index.ts',
        vite: {
          build: {
            sourcemap: false,
            outDir: 'dist/electron/main'
          }
        }
      },
      preload: {
        input: {
          // You can configure multiple preload here
          splash: join(__dirname, 'electron/preload/splash.ts')
        },
        vite: {
          build: {
            // For debug
            sourcemap: 'inline',
            outDir: 'dist/electron/preload'
          }
        }
      }
    }),
    // Enable use Electron, Node.js API in Renderer-process
    renderer()
  ]
})
