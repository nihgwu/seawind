import { Box } from '../src/Box'
import { Flex } from '../src/Flex'

import * as DS from './DesignSystem.stories'

function App() {
  return (
    <Box width="full" height="full" px="2" py="8" fontFamily="sans">
      <Box mx="auto" px="3" css={{ maxWidth: 960 }}>
        <Flex
          p="6"
          mx="auto"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          align="center"
          gap="4"
        >
          <Flex flexShrink="0">
            <Box boxSize="12" bg="rose-300" borderRadius="md" />
          </Flex>
          <Box>
            <Box fontSize="xl" fontWeight="medium" color="black">
              Seawind
            </Box>
            <Box color="slate-500">Stitches + Tailwind</Box>
          </Box>
        </Flex>
        {Object.entries(DS).map(([name, Story]) => (
          <Box key={name}>
            <Box fontSize="lg" fontWeight="semibold" mt="8" mb="4">
              {name}
            </Box>
            <Story />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default App
