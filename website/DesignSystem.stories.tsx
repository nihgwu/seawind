import { config, styled } from '../src/styled'
import { Box } from '../src/Box'
import { Flex, Stack } from '../src/Flex'

const Lorem = styled(Box, {
  color: '$rose-500',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

Lorem.defaultProps = {
  children: 'The quick brown fox jumps over the lazy dog.',
}

export const Colors = () => (
  <Flex gap="6" wrap="wrap">
    {Object.entries(config.theme.colors).map(([token, value]) => (
      <Box key={token} width="24" overflow="hidden">
        <Box bg={token as any} height="8" borderRadius="md" />
        <Box p="1" fontSize="sm">
          <Box>{token}</Box>
          <Box color="gray-500">{value}</Box>
        </Box>
      </Box>
    ))}
  </Flex>
)

export const Space = () => (
  <Stack gap="4">
    {Object.entries(config.theme.space).map(([token, value]) => (
      <Flex key={token}>
        <Box width="36" letterSpacing="tight">
          {token} /{' '}
          <Box as="span" fontSize="sm" color="gray-500">
            {value}
          </Box>
        </Box>
        <Box width="full" bg="rose-50" height="6" overflow="hidden">
          <Box bg="rose-300" boxShadow="md" height="6" width={token as any} />
        </Box>
      </Flex>
    ))}
  </Stack>
)

export const FontSizes = () => (
  <Stack gap="4">
    {Object.entries(config.theme.fontSizes).map(([token, value]) => (
      <Flex key={token}>
        <Box width="36" letterSpacing="tight">
          {token} /{' '}
          <Box as="span" fontSize="sm" color="gray-500">
            {value}
          </Box>
        </Box>
        <Box width="full" overflow="hidden">
          <Lorem fontSize={token as any} />
        </Box>
      </Flex>
    ))}
  </Stack>
)

export const Fonts = () => (
  <Stack gap="4">
    {Object.entries(config.theme.fonts).map(([token, value]) => (
      <Flex key={token}>
        <Box width="36" letterSpacing="tight">
          {token}
        </Box>
        <Box width="full" overflow="hidden">
          <Lorem fontFamily={token as any} />
        </Box>
      </Flex>
    ))}
  </Stack>
)

export const FontWeights = () => (
  <Stack gap="4">
    {Object.entries(config.theme.fontWeights).map(([token, value]) => (
      <Flex key={token}>
        <Box width="36" letterSpacing="tight">
          {token} /{' '}
          <Box as="span" fontSize="sm" color="gray-500">
            {value}
          </Box>
        </Box>
        <Box width="full" overflow="hidden">
          <Lorem fontWeight={token as any} />
        </Box>
      </Flex>
    ))}
  </Stack>
)

export const LineHeights = () => (
  <Stack gap="4">
    {Object.entries(config.theme.lineHeights).map(([token, value]) => (
      <Flex key={token}>
        <Box width="36" letterSpacing="tight">
          {token} /{' '}
          <Box as="span" fontSize="sm" color="gray-500">
            {value}
          </Box>
        </Box>
        <Box width="full" overflow="hidden">
          <Lorem lineHeight={token as any} bg="rose-50" />
        </Box>
      </Flex>
    ))}
  </Stack>
)

export const LetterSpacings = () => (
  <Stack gap="4">
    {Object.entries(config.theme.letterSpacings).map(([token, value]) => (
      <Flex key={token}>
        <Box width="36" letterSpacing="tight">
          {token} /{' '}
          <Box as="span" fontSize="sm" color="gray-500">
            {value}
          </Box>
        </Box>
        <Box width="full" overflow="hidden">
          <Lorem letterSpacing={token as any} />
        </Box>
      </Flex>
    ))}
  </Stack>
)

export const Sizes = () => (
  <Stack gap="4">
    {Object.entries(config.theme.sizes).map(([token, value]) => (
      <Flex key={token}>
        <Box width="36" letterSpacing="tight">
          {token} /{' '}
          <Box as="span" fontSize="sm" color="gray-500">
            {value}
          </Box>
        </Box>
        <Box width="full" bg="rose-50" height="6" overflow="hidden">
          <Box bg="rose-300" boxShadow="md" height="6" width={token as any} />
        </Box>
      </Flex>
    ))}
  </Stack>
)

export const Shadows = () => (
  <Flex gap="6" wrap="wrap">
    {Object.entries(config.theme.shadows).map(([token]) => (
      <Flex
        key={token}
        bg="white"
        color="black"
        boxShadow={token as any}
        align="center"
        justify="center"
        overflow="hidden"
        borderRadius="md"
        boxSize="24"
      >
        <Box>{token}</Box>
      </Flex>
    ))}
  </Flex>
)

export const Radii = () => (
  <Flex gap="6" wrap="wrap">
    {Object.entries(config.theme.radii).map(([token]) => (
      <Flex
        key={token}
        borderRadius={token as any}
        bg="rose-300"
        align="center"
        justify="center"
        overflow="hidden"
        boxSize="24"
      >
        <Box>{token}</Box>
      </Flex>
    ))}
  </Flex>
)
