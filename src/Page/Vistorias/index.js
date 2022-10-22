import {
  Box,
  Center,
  Stack,
  Flex,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react';

import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useState } from 'react'
import ItemVistoria from '../../components/GrupoVistorias/ItemVistoria'


export default function Vistoria() {

  const [vistorias, setVistorias] = useState([]);

  const fetchVistorias = async () => {
    const data = await axios.get('/api/v1/vistorias');

    setVistorias(data.data);    
  };

  return (
    <Center py={12}>

      <Flex direction={'column'} >
        <Box p={5} shadow='md' borderWidth='1px'>
          <Stack spacing={4} mb={8}>
            <Button leftIcon={<AddIcon />} colorScheme='teal' variant='outline'
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/vistorias/add/dadosassociados';
              }}>
              Adicionar uma Vistoria
            </Button>
          </Stack>

          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='teal' />}

            />
            <Input type='text' placeholder='Vistoria pelo nome do associado' w={[300, 400]}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  fetchVistorias();
                }
              }}
            />
          </InputGroup>
        </Box>
        <Box>
          {(vistorias.length > 0) ? (
            <Flex direction={'column'} >
              <Box p={5} shadow='md' borderWidth='1px'>
                <Stack spacing={4} mb={8}>
                  <Heading>Listagem das Vistorias</Heading>
                </Stack>
                <Grid
                  templateColumns='repeat(1, 1fr)'>
                  {vistorias.length > 0 ? (
                    vistorias.map((v) => {
                      return (
                        <GridItem key={v.id} mb={5}>
                          <ItemVistoria vistoria={v} />
                        </GridItem>
                      );
                    })) : (<Text />)}
                </Grid>
              </Box>
            </Flex>
          ) : (<Text />)}
        </Box>
      </Flex>
    </Center>
  );
}