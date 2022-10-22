import { ChakraProvider, Divider } from '@chakra-ui/react'
import {
  Box,
  Button,
  Icon,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'
import { theme } from '../../CustomSelect/theme'
import { CustomSelect } from '../../CustomSelect/CustomSelect'
import { Option } from '../../CustomSelect/Option'
import API from '../../../api'

export default function AppContainerFormulario() {
  const [desabilitado, setDesabilitado] = React.useState(true);
  const [selectedCliente, setSelectedCliente] = React.useState(null);
  const [selectedTipoAutomovel, setSelectedTipoAutomovel] = React.useState(null);


  const [documento, setDocumento] = React.useState("");
  const [vistoriador, setVistoriador] = React.useState("");
  const [cliente, setCliente] = React.useState("");
  const [tipoAutomovel, setTipoAutomovel] = React.useState("");
  const [status, setStatus] = React.useState("");

  const [tiposAutomovel, setTiposAutomovel] = useState([]);
  const [clientesNome, setClientesNome] = useState([]);

  const [associacao, setAssociacao] = React.useState("");

  const fetchStatus = async () => {
    const data = await API.get('api/v1/status/descricao/ativo');

    setStatus(data.data);
  };

  const fetchSomenteDescricaoTipoAutomovel = async () => {
    const data = await   API.get('api/v1/tipoautomoveis/somente/descricao');

    setTiposAutomovel(data.data);
  };

  const fetchClientesNome = async () => {
    const data = await API.get('api/v1/clientes/nomes');
    setClientesNome(data.data);    
    setVistoriador("ASSOCIAÇÃO DE CARROS DE BETIM");
  };

  useEffect(() => {
    fetchClientesNome();
    fetchSomenteDescricaoTipoAutomovel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDocumento = async () => {
    if (selectedCliente != null) {
      const url = 'api/v1/clientes/nomes/' + selectedCliente;
      const dOrdem = await API.get(url);
      setDocumento(dOrdem.data.documento)
      setCliente(dOrdem.data);
    }
  }

  const fetchTipoAutomovel = async () => {
    const url = 'api/v1/tipoautomoveis/descricao/' + selectedTipoAutomovel;
    const data = await API.get(url);
    setTipoAutomovel(data.data);
  }

  useEffect(() => {
    fetchDocumento();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCliente]);

  useEffect(() => {
    if(selectedTipoAutomovel!== null)
      outroClique();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTipoAutomovel]);

  const fetchAssociacao = async () => {
    const url = 'api/v1/associacoes/descricao/' + vistoriador;
    const data = await API.get(url);
    setAssociacao(data.data)
  }

  const fetchCriarVistoria = async () => {
    try {
      // eslint-disable-next-line 
      const response = await axios({
        method: "post",
        url: "api/v1/movimentovistorias",
        data: {
          cliente,
          associacao,
          tipoAutomovel,
          status
        },
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const outroClique = () => {
    fetchStatus();
    fetchAssociacao();
    fetchTipoAutomovel();
    
    console.log(tipoAutomovel);

    setDesabilitado(false);
  }

  const salverOnClique = async () => {    
    await fetchCriarVistoria();
  }
  
  return (
    <>
      <Box as="section" py="12" bg={useColorModeValue('gray.100', 'gray.800')}>
        <Card>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '10' }}>
            <CardContent>
              <CardHeader
                title=""
                action={
                  <Button
                    size="sm"
                    variant="outline"
                    leftIcon={<Icon as={AddIcon} color="green.400" marginStart="-1" />}
                    onClick={outroClique}
                  >
                    Novo Cliente
                  </Button>
                }
              />
              <FormControl mb={3}>
                <FormLabel>Escolha um Cliente</FormLabel>
                <ChakraProvider theme={theme}>
                  <CustomSelect
                    name={"cliente"}
                    colorScheme={"green"}
                    value={selectedCliente}
                    onChange={setSelectedCliente}
                    placeholder={"Selecione"}
                  >
                    {                       
                      Array.isArray(clientesNome) ? (
                      clientesNome.map((v) => {
                        return (
                          <Option key={v} value={v} />
                        );
                      })):(null)
                    }
                  </CustomSelect>
                </ChakraProvider>
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Documento</FormLabel>
                <Input
                  value={documento}
                  readOnly />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Nome do Vistoriador</FormLabel>
                <Input
                  value={vistoriador}
                  readOnly />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Escolha Tipo do Automóvel</FormLabel>
                <ChakraProvider theme={theme}>
                  <CustomSelect
                    name={"automovel"}
                    colorScheme={"green"}
                    value={selectedTipoAutomovel}
                    onChange={setSelectedTipoAutomovel}
                    placeholder={"Selecione"}>
                    {
                      
                      Array.isArray(tiposAutomovel) ? (
                      tiposAutomovel.map((v) => {
                        return (
                          <Option key={v} value={v} />
                        );
                      })): (null)
                    }
                  </CustomSelect>
                </ChakraProvider>
              </FormControl>
              <Divider mt={10} mb={10} />
              <Button  mr={5} leftIcon={<AddIcon />} colorScheme={"green"}
                onClick={(e) => {
                  salverOnClique();
                  e.preventDefault();
                  window.location.href = '/vistorias/add/dadosveiculo';
                }} isDisabled={desabilitado}>
                Criar Vistoria
              </Button>
              <Button ml={5} colorScheme={"yellow"}>Cancelar</Button>
            </CardContent>
          </Stack>
        </Card>
      </Box>
    </>
  )
}