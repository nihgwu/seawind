import { styled } from './styled'
import { createSpaceVariant, createCssVariant } from './utils'
import { Flex } from './Flex'

export const Grid = styled(Flex, {
  display: 'grid',
  variants: {
    flow: createCssVariant('gridAutoFlow', ['column', 'dense', 'row']),
    rowGap: createSpaceVariant('rowGap'),
    columnGap: createSpaceVariant('columnGap'),
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
  },
})
