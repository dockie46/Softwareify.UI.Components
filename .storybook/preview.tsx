import type { Preview } from '@storybook/react-vite'
import { ConfigProvider } from 'antd'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

import 'antd/dist/reset.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <ConfigProvider>
          <Story />
        </ConfigProvider>
      </I18nextProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
