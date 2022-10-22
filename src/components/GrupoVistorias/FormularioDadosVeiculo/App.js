import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { Divider, Flex } from '@chakra-ui/react'
import {
  Box,
  Button,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
import API from '../../../api'
import { CheckIcon, DownloadIcon } from '@chakra-ui/icons'
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'

export default function AppContainerFormulario() {
  const [desabilitado, setDesabilitado] = useState(true);
  const [dadosCarregados, setDadosCarregados] = useState(false);  

  const [placa, setPlaca] = useState("");
  const [chassi, setChassi] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [anoModelo, setAnoModelo] = useState("");
  const [cor, setCor] = useState("");
  const [cilindrada, setCilindrada] = useState("");
  const [potencia, setPotencia] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [uf, setUf] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [importado, setImportado] = useState("");
  const [pesoBrutoTotal, setPesoBrutoTotal] = useState("");
  const [capMaxTracao, setCapMaxTracao] = useState("");
  const [tipoVeiculo, setTipoVeiculo] = useState("");
  const [especieVeiculo, setEspecieVeiculo] = useState("");
  const [passageiros, setPassageiros] = useState("");
  const [segmento, setSegmento] = useState("");
  
  const fetchSalvarVistoriaDadosVeiculo = async () => {
    try {
      // eslint-disable-next-line 
      const response = await API.post({        
        url: "api/v1/movimentovistorias",
        data: {
          placa,
          chassi,
          marca,
          modelo,
          ano,
          anoModelo,
          cor,
          cilindrada,
          potencia,
          combustivel,
          uf,
          municipio,
          importado,
          pesoBrutoTotal,
          capMaxTracao,
          tipoVeiculo,
          especieVeiculo,
          passageiros,
          segmento,        
        },
        headers: { "Content-Type": "application/json" },
      });      
    } catch (error) {
      console.log(error);
    }
  }

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    updateMedia();
  });

  const carregaDadosVeiculo = (veiculo) => {    
    setMarca(veiculo.placa);
    setChassi(veiculo.chassi);
    setMarca(veiculo.marca);
    setModelo(veiculo.modelo);
    setAno(veiculo.ano);
    setAnoModelo(veiculo.anoModelo);
    setCor(veiculo.cor);
    setCilindrada(veiculo.cilindrada);
    setPotencia(veiculo.potencia);
    setCombustivel(veiculo.combustivel);
    setUf(veiculo.uf);
    setMunicipio(veiculo.municipio);
    setImportado(veiculo.importado);
    setPesoBrutoTotal(veiculo.pesoBrutoTotal);
    setCapMaxTracao(veiculo.capMaxTracao);
    setTipoVeiculo(veiculo.tipoVeiculo);
    setEspecieVeiculo(veiculo.especieVeiculo);
    setPassageiros(veiculo.passageiros);
    setSegmento(veiculo.segmento);
  }

  useEffect(() => {
    if (dadosCarregados)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      carregaDadosVeiculo()
  }, [dadosCarregados]);

  const fetchDadosVeiculos = async (pPlaca) => {    
    const data = await API.get('api/v1/dadosveiculofipe/placa/' + pPlaca.toString().replace("-", ""));
    carregaDadosVeiculo(data.data);    
    setDadosCarregados(!(data.status.valueOf() === 200));
    setDesabilitado(!(data.status.valueOf() === 200));
  };

  const salvarOnClique = async () => {
    await fetchSalvarVistoriaDadosVeiculo();
  }

  return (
    <>
      <Box as="section" py="12" bg={useColorModeValue('gray.100', 'gray.800')}>
        <Card>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '10' }}>
            <CardContent>
              <CardHeader title="" />
              <FormControl mb={3}>
                <FormLabel>Informe a Placa do Veículo</FormLabel>
                <Input
                  as={InputMask}
                  mask="***-****"
                  value={placa}
                  width={'120px'}
                  textTransform="uppercase"
                  onChange={(e) => { setPlaca(e.target.value) }}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      fetchDadosVeiculos(e.target.value);
                    }
                  }}
                />

                {!isDesktop ? (
                  <Button
                    ml={5}
                    leftIcon={<DownloadIcon />}
                    onClick={(e) => {
                      fetchDadosVeiculos(placa);
                      e.preventDefault();
                    }}
                  >
                    Buscar dados Veiculo
                  </Button>
                ) : (
                  <FormHelperText>Pressione Enter após informar a Placa.</FormHelperText>
                )}


              </FormControl>
              <FormControl mb={3}>
                <FormLabel>Chassi</FormLabel>
                <Input
                  value={chassi}
                  textTransform="uppercase"
                  onChange={(e) => { setChassi(e.target.value) }} />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Marca</FormLabel>
                <Input
                  value={marca}
                  textTransform="uppercase"
                  onChange={(e) => { setMarca(e.target.value) }} />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Modelo</FormLabel>
                <Input
                  value={modelo}
                  textTransform="uppercase"
                  onChange={(e) => { setModelo(e.target.value) }} />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Cilindrada</FormLabel>
                <Input
                  value={cilindrada}
                  textTransform="uppercase"
                  onChange={(e) => { setCilindrada(e.target.value) }} />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Potência</FormLabel>
                <Input
                  value={potencia}
                  textTransform="uppercase"
                  onChange={(e) => { setPotencia(e.target.value) }} />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Combustível</FormLabel>
                <Input
                  value={combustivel}
                  textTransform="uppercase"
                  onChange={(e) => { setCombustivel(e.target.value) }} />
              </FormControl>


              <Flex direction={['column', 'row']} mb={3}>
                <FormControl mb={3}>
                  <FormLabel>Ano Fabricação</FormLabel>
                  <Input
                    value={ano}
                    width={'110px'}
                    textTransform="uppercase"
                    onChange={(e) => { setAno(e.target.value) }} />
                </FormControl>

                <FormControl mb={3}>
                  <FormLabel>Ano Modelo</FormLabel>
                  <Input
                    value={anoModelo}
                    width={'110px'}
                    textTransform="uppercase"
                    onChange={(e) => { setAnoModelo(e.target.value) }} />
                </FormControl>

                <FormControl mb={3}>
                  <FormLabel>Cor</FormLabel>
                  <Input
                    value={cor}
                    textTransform="uppercase"
                    onChange={(e) => { setCor(e.target.value) }} />
                </FormControl>
              </Flex>

              <Flex direction={['column', 'row']} mb={3}>
                <FormControl mb={3}>
                  <FormLabel>UF</FormLabel>
                  <Input
                    value={uf}
                    width={'110px'}
                    textTransform="uppercase"
                    onChange={(e) => { setUf(e.target.value) }} />
                </FormControl>

                <FormControl mb={3} width={['100%', '200%']}>
                  <FormLabel>Município</FormLabel>
                  <Input
                    value={municipio}
                    textTransform="uppercase"
                    onChange={(e) => { setMunicipio(e.target.value) }} />
                </FormControl>
              </Flex>

              <Flex direction={['column', 'row']} mb={3}>
                <FormControl mb={3}>
                  <FormLabel>Importado</FormLabel>
                  <Input
                    value={importado}
                    width={'110px'}
                    textTransform="uppercase"
                    onChange={(e) => { setImportado(e.target.value) }} />
                </FormControl>

                <FormControl mb={3}>
                  <FormLabel>Peso Bruto Total</FormLabel>
                  <Input
                    value={pesoBrutoTotal}
                    width={['100%', '150px']}
                    textTransform="uppercase"
                    onChange={(e) => { setPesoBrutoTotal(e.target.value) }} />
                </FormControl>

                <FormControl mb={3}>
                  <FormLabel>Cap. Max. Tração</FormLabel>
                  <Input
                    value={capMaxTracao}
                    width={['100%', '200px']}
                    textTransform="uppercase"
                    onChange={(e) => { setCapMaxTracao(e.target.value) }} />
                </FormControl>
              </Flex>

              <FormControl mb={3}>
                <FormLabel>Tipo Veículo</FormLabel>
                <Input
                  value={tipoVeiculo}
                  textTransform="uppercase"
                  onChange={(e) => { setTipoVeiculo(e.target.value) }} />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Espécie Veículo</FormLabel>
                <Input
                  value={especieVeiculo}
                  textTransform="uppercase"
                  onChange={(e) => { setEspecieVeiculo(e.target.value) }} />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Número de Passageiros</FormLabel>
                <Input
                  value={passageiros}
                  textTransform="uppercase"
                  onChange={(e) => { setPassageiros(e.target.value) }} />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Segmento do Veículo</FormLabel>
                <Input
                  value={segmento}
                  textTransform="uppercase"
                  onChange={(e) => { setSegmento(e.target.value) }} />
              </FormControl>


              <Divider mt={10} mb={10} />
              <Button mr={5} leftIcon={<CheckIcon />} colorScheme={"green"}
                onClick={(e) => {
                  salvarOnClique();
                  e.preventDefault();
                  window.location.href = `/vistorias/add/dadosveiculofotos`;
                }} isDisabled={desabilitado}>
                Salvar Dados Veículo
              </Button>
              <Button ml={5} colorScheme={"yellow"}>Cancelar</Button>
            </CardContent>
          </Stack>
        </Card>
      </Box>
    </>
  )
}