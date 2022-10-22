import { Box, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { Step } from './Step'

const AppSteps = (props) => {

  const { isDA, isDV, isAA } = props;
console.log();

  return (
    <Box mx="auto" maxW="3xl" py="10" px={{ base: '6', md: '8' }}>
      <nav aria-label="Progress steps">
        <HStack as="ol" listStyleType="none" spacing="0">
          <Step isCurrent={isDA}>Dados do Associados</Step>
          <Step isCurrent={isDV}>Dados do Veículo</Step>
          <Step isCurrent={isAA}>Danos ou Avarias - Acessórios</Step>
        </HStack>
      </nav>
    </Box>
  )
}

export default AppSteps;