export function replaceWithObj(target: string,
  replace: Record<string, string | number>) {
  return target?.replace(/{{([^}]+)}}/g, (ori, k) => `${replace[k] ?? ''}` || ori)
}
