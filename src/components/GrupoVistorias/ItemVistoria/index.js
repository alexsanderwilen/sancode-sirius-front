import React from 'react'
import { Flex, Button, Badge, Stack, Thead, TableContainer, Table, Tbody, Td, Tr, Th, } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons';
import { format } from 'date-fns';


const ItemVistoria = (vistoria) => {
  const dt = format(new Date(vistoria.vistoria.dataVistoria), 'dd/MM/yyy kk:mm:ss');  
  return (
    <Flex color={'gray.800'}
      bg={"#c3e6cb"}
      h={'auto'}
      pl={4}
      direction={'column'}
    >
      <TableContainer>
        <Table variant='simple' size={16}>
          <Thead>
            <Tr>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Associado:</Td>
              <Td fontSize={'small'} >{vistoria.vistoria.associado}</Td>
            </Tr>
            <Tr>
              <Td>Placa:</Td>
              <Td>{vistoria.vistoria.placa}</Td>
            </Tr>
            <Tr>
              <Td>Data Vistoria</Td>
              <Td>{dt}</Td>
            </Tr>
            <Tr>
              <Td>Status</Td>
              <Td>
                <Badge fontSize='0.8em' colorScheme='teal'>
                  {vistoria.vistoria.status}
                </Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Stack direction='row' alignContent={'center'} justifyItems={'center'} >
                  <Button size={'sm'} leftIcon={<EditIcon />} colorScheme='blue' variant='ghost'>
                    EDITAR
                  </Button>
                </Stack>
              </Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}

export default ItemVistoria