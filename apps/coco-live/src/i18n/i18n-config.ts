export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'cn'],
} as const

export type Locale = (typeof i18n)['locales'][number]
export interface LocaleParamsProps<P extends Record<string, string | string[]> = Record<string, never>> {
  params: {
    locale: Locale
  } & P
}
