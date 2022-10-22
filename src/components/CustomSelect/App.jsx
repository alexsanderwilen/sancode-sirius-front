import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { CustomSelect } from './CustomSelect'
import { Option } from './Option'
import { theme } from './theme'
/**
 * Please note - this component uses Downshift as a dependency. This must be installed additionally using `yarn add downshift`
 */

export const ComboBox = (dataset, name, colorScheme, placeHolder) => {

  const [selectedOption, setSelectedOption] = React.useState(null)
  return (
    <ChakraProvider theme={theme}>
      <CustomSelect
        name={name}
        colorScheme={colorScheme}
        value={selectedOption}
        onChange={setSelectedOption}
        placeholder={placeHolder}                
      >
        {
          dataset.dataset.map((v) => {
            return (
              <Option value={v} />              
            );
          })
        }
      </CustomSelect>      
    </ChakraProvider>
  )
}
