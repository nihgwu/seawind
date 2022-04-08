import { CSSProperties } from '@stitches/react'

import { CSS, theme, config } from './styled'

export type Config = typeof config
export type Theme = Config['theme']
export type Scale = keyof Theme
export type ScaleValue<T extends Scale> = keyof Theme[T]

export const createScaleVariant = <T extends Scale>(
  scale: T,
  ...properties: (keyof CSSProperties)[]
) =>
  Object.keys(theme[scale]).reduce((acc, key) => {
    return {
      ...acc,
      [key]: properties.reduce((map, prop) => {
        return {
          ...map,
          [prop]: `$${key}`,
        }
      }, {} as Record<keyof CSSProperties, string>),
    }
  }, {} as Record<ScaleValue<T>, CSS>)

export const createSpaceVariant = (...properties: Array<keyof CSSProperties>) =>
  createScaleVariant('space', ...properties)

type Property<T extends keyof CSSProperties> = Exclude<
  CSSProperties[T],
  undefined
>

export const createCssVariant = <T extends keyof CSSProperties>(
  property: T,
  values: Property<T>[]
) =>
  values.reduce(
    (acc, key) => ({
      ...acc,
      [key]: { [property]: key },
    }),
    {} as Record<Property<T>, CSS>
  )
