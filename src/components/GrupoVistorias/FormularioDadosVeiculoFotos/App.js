import React, { useEffect, useCallback } from 'react'
import api from '../../../api'
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { Card } from './Card'
import { CardContent } from './CardContent'
import VeiculoCarroFrente from '../../../assets/veiculo_carro_frente.png'
import VeiculoCarroTraseira from '../../../assets/veiculo_carro_traseira.png'
import VeiculoCarroLateralEsquerda from '../../../assets/veiculo_carro_lateral_esquerda.png'
import VeiculoCarroLateralDireita from '../../../assets/veiculo_carro_lateral_direita.png'

import { useDropzone } from 'react-dropzone';

export default function AppContainerFormulario() {
  const [imgVeiculoFrontal, setImgVeiculoFrontal] = React.useState("");
  const [imgVeiculoTraseira, setImgVeiculoTraseira] = React.useState([]);
  const [imgVeiculoLateralEsquerdo, setImgVeiculoLateralEsquerdo] = React.useState([]);
  const [imgVeiculoLateralDireito, setImgVeiculoLateralDireita] = React.useState([]);

  const fetchImgVeiculoFrontal = () => {
    api.get('api/v1/movimentovistoriaveiculos/foto/veiculofrontal/download/1')
      .then(res => {
        setImgVeiculoFrontal('http://ec2-54-173-209-244.compute-1.amazonaws.com:8080/api/v1/movimentovistoriaveiculos/foto/veiculofrontal/download/1');
      });
  }



  const fetchImgVeiculoTraseira = () => {
    api.get('api/v1/movimentovistoriaveiculos/foto/veiculo/traseira/download/1')
      .then(res => {
        setImgVeiculoTraseira('http://ec2-54-173-209-244.compute-1.amazonaws.com:8080/api/v1/movimentovistoriaveiculos/foto/veiculo/traseira/download/1');
      });
  }

  const fetchImgVeiculoLateralEsquerdo = () => {
    api.get('api/v1/movimentovistoriaveiculos/foto/veiculo/lateral/esquerdo/download/1')
      .then(res => {        
        setImgVeiculoLateralEsquerdo('http://ec2-54-173-209-244.compute-1.amazonaws.com:8080/api/v1/movimentovistoriaveiculos/foto/veiculo/lateral/esquerdo/download/1');
      });
  }

  const fetchImgVeiculoLateralDireita = () => {
    api.get('api/v1/movimentovistoriaveiculos/foto/veiculo/lateral/direito/direito/download/1')
      .then(res => {        
        setImgVeiculoLateralDireita('http://ec2-54-173-209-244.compute-1.amazonaws.com:8080/api/v1/movimentovistoriaveiculos/foto/veiculo/lateral/direito/direito/download/1');
      });
  }
  useEffect(() => {
    fetchImgVeiculoFrontal();
  });

  useEffect(() => {
    fetchImgVeiculoTraseira();
  });
  useEffect(() => {
    fetchImgVeiculoLateralEsquerdo();
  });
  useEffect(() => {
    fetchImgVeiculoLateralDireita();
  });


  return (
    <>
      <Box as="section" py="3" bg={useColorModeValue('gray.100', 'gray.800')}>
        <Card mb={5}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '10' }}>
            <CardContent>
              <Flex direction={'column'}>
                <Flex direction={'row'} justifyContent={'space-between'}>
                  <Flex direction={'column'}>
                    <Text fontSize={'2xl'} mt={-3} mb={4}>Frente</Text>
                    <MyDropzone parteVeiculo='veiculofrontal' codigo='1' />
                  </Flex>
                  <Flex>
                    <Image mb={3} width={100} src={VeiculoCarroFrente}></Image>
                  </Flex>
                </Flex>
                <Flex>
                  <Image width={500} src={imgVeiculoFrontal}></Image>
                </Flex>
              </Flex>
            </CardContent>
          </Stack>
        </Card>
      </Box>

      <Box as="section" py="3" bg={useColorModeValue('gray.100', 'gray.800')}>
        <Card mb={5}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '10' }}>
            <CardContent>
              <Flex direction={'column'}>
                <Flex direction={'row'} justifyContent={'space-between'}>
                  <Flex direction={'column'}>
                    <Text fontSize={'2xl'} mt={-3} mb={4}>Traseira</Text>
                    <MyDropzone parteVeiculo='veiculo/traseira' codigo='2' />
                  </Flex>
                  <Flex>
                    <Image mb={3} width={100} src={VeiculoCarroTraseira}></Image>
                  </Flex>
                </Flex>
                <Flex>
                  <Image width={500} src={imgVeiculoTraseira}></Image>
                </Flex>
              </Flex>
            </CardContent>
          </Stack>
        </Card>
      </Box>

      <Box as="section" py="3" bg={useColorModeValue('gray.100', 'gray.800')}>
        <Card mb={5}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '10' }}>
            <CardContent>
              <Flex direction={'column'}>
                <Flex direction={'row'} justifyContent={'space-between'}>
                  <Flex direction={'column'}>
                    <Text fontSize={'2xl'} mt={-3} mb={4}>Laterial Esquerda</Text>
                    <MyDropzone parteVeiculo={'veiculo/lateral/esquerdo'} codigo='3' />
                  </Flex>
                  <Flex>
                    <Image mt={-8} width={150} src={VeiculoCarroLateralEsquerda}></Image>
                  </Flex>
                </Flex>
                <Flex>
                  <Image width={500} src={imgVeiculoLateralEsquerdo}></Image>
                </Flex>
              </Flex>
            </CardContent>
          </Stack>
        </Card>
      </Box>

      <Box as="section" py="3" bg={useColorModeValue('gray.100', 'gray.800')}>
        <Card mb={5}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '10' }}>
            <CardContent>
              <Flex direction={'column'}>
                <Flex direction={'row'} justifyContent={'space-between'}>
                  <Flex direction={'column'}>
                    <Text fontSize={'2xl'} mt={-3} mb={4}>Lateral Direita</Text>
                    <MyDropzone parteVeiculo={'veiculo/lateral/direito/direito'} codigo='4' />
                  </Flex>
                  <Flex>
                    <Image mt={-8} width={150} src={VeiculoCarroLateralDireita}></Image>
                  </Flex>
                </Flex>
                <Flex>
                  <Image width={500} src={imgVeiculoLateralDireito}></Image>
                </Flex>
              </Flex>
            </CardContent>
          </Stack>
        </Card>
      </Box>



    </>
  )
}

function MyDropzone(parteVeiculo) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);    
    api.post(`/api/v1/movimentovistoriaveiculos/foto/${parteVeiculo.parteVeiculo}/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart:form-data"
        }
      }
    ).then(res => {
      console.log('sucesso');
    })
      .catch(error => {
        
      });
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input as={Button} {...getInputProps() }/>
      {
        isDragActive ?
          <p>Já pode soltar ...</p> :
          <p><Button bgColor={"gray.200"} >Carregar Imagem</Button></p>
      }
    </div>
  )
}