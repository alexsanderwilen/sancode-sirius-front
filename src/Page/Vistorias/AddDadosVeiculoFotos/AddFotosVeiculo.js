
import { Image } from '@chakra-ui/react';
import axios from 'axios';
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

const AddFotosVeiculo = () => {
    const [imgVeiculoFrontal, setImgVeiculoFrontal] = React.useState([]);

    const fetchImgVeiculoFrontal = () => {
        axios.get('/api/v1/movimentovistoriaveiculos/foto/veiculofrontal/download/1')
            .then(res => {
                console.log(res.data);
                setImgVeiculoFrontal(res.data);
            });

    }

    React.useEffect(() => {
        fetchImgVeiculoFrontal();
    }, []);

    return (
        <>
            <Image src={'/api/v1/movimentovistoriaveiculos/foto/veiculofrontal/download/1'}></Image>
            <MyDropzone />
        </>
    )
}

function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append("file", file);
        axios.post('/api/v1/movimentovistoriaveiculos/foto/veiculofrontal/upload',
            formData,
            {
                headers: {
                    "Content-Type": "multipart:form-data"
                }
            }
        ).then(res => {
            console.log("sucesso!")
        })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Já pode soltar ...</p> :
                    <p>Arraste e solte alguma foto aqui ou clique para selecionar a foto</p>
            }
        </div>
    )
}



export default AddFotosVeiculo