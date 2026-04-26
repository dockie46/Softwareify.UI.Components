import type { Preview } from '@storybook/react-vite'
import { I18nextProvider } from 'react-i18next'
import { SoftwareifyThemeProvider } from '../src/components/providers'
import { softwareifyTheme } from '../src/config/designTokens'
import i18n from './i18n'

import 'antd/dist/reset.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <SoftwareifyThemeProvider theme={softwareifyTheme}>
          <Story />
        </SoftwareifyThemeProvider>
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
