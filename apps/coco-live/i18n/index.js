import { getRequestConfig } from 'next-intl/server'

const config = getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${['cn', 'en'].includes(locale) ? locale : 'en'}`)).default,
}))

export default config
