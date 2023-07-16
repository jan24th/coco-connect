export type FalseType = '' | 0 | false | null | undefined
export function typedBoolean<Value>(value: Value): value is Exclude<Value, FalseType> {
  return Boolean(value)
}
