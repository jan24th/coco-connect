export function Time({ time, locale }: { time: string | Date | number;locale: string }) {
  const t = new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short' }).format(new Date(time))
  return <time dateTime={t} className="text-zinc-500">
    {t}
  </time>
}
