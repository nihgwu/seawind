import { styled } from './styled'
import { createSpaceVariant, createCssVariant } from './utils'
import { Box } from './Box'

export const Flex = styled(Box, {
  display: 'flex',
  variants: {
    direction: createCssVariant('flexDirection', [
      'column',
      'column-reverse',
      'row',
      'row-reverse',
    ]),
    align: createCssVariant('alignItems', [
      'baseline',
      'center',
      'flex-end',
      'flex-start',
      'stretch',
    ]),
    justify: createCssVariant('justifyContent', [
      'center',
      'flex-end',
      'flex-start',
      'space-around',
      'space-between',
      'space-evenly',
      'stretch',
    ]),
    wrap: createCssVariant('flexWrap', ['nowrap', 'wrap', 'wrap-reverse']),
    gap: createSpaceVariant('gap'),
  },
})

export const Stack = styled(Flex, {
  defaultVariants: {
    direction: 'column',
  },
})
