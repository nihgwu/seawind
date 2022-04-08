import * as fs from 'fs'
import flat from 'flat'
import resolveConfig from 'tailwindcss/resolveConfig.js'

import tailwindConfig from '../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig)

const config = {
  theme: {
    colors: flat(theme.colors, {
      delimiter: '-',
    }),
    space: { ...theme.spacing, auto: 'auto' },
    fontSizes: Object.fromEntries(
      Object.entries(theme.fontSize).map(([key, value]) => [key, value[0]])
    ),
    fonts: Object.fromEntries(
      Object.entries(theme.fontFamily).map(([key, value]) => [
        key,
        value.join(', '),
      ])
    ),
    fontWeights: theme.fontWeight,
    lineHeights: theme.lineHeight,
    letterSpacings: theme.letterSpacing,
    sizes: { ...theme.width, ...theme.screens },
    borderWidths: theme.borderWidth,
    borderStyles: {},
    radii: theme.borderRadius,
    shadows: theme.boxShadow,
    zIndices: theme.zIndex,
    transitions: {},
  },
  media: Object.fromEntries(
    Object.entries(theme.screens).map(([key, value]) => [
      key,
      `@media (min-width: ${value})`,
    ])
  ),
}

fs.writeFileSync('src/tailwindTheme.json', JSON.stringify(theme, null, 2))

fs.writeFileSync(
  'src/theme.json',
  JSON.stringify(config, null, 2)
    .replace(/DEFAULT/g, 'true')
    .replace(/\.(\d+":)/g, '_$1')
    .replace(/\/(\d+":)/g, '-$1')
)
