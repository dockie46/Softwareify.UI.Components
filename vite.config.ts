import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.json',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SoftwareifyUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'antd',
        'antd/es/table/interface',
        'antd/es/form/interface',
        'antd/es/grid/row',
        'antd/es/select',
        'antd/lib',
        '@ant-design/icons',
        'dayjs',
        'i18next',
        'react-i18next',
        'react-dnd',
        'react-dnd-html5-backend',
        'react-resize-detector',
        'react-string-format',
        'rc-table/lib/interface',
      ],
    },
  },
})
