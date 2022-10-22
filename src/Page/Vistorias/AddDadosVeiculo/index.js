import React from 'react'
import AppSteps from '../../../components/StepsWithArrow/AppSteps';
import FormularioDadosVeiculo from '../../../components/GrupoVistorias/FormularioDadosVeiculo';

const AddDadosVeiculo = () => {
  return (
    <React.Fragment>
      <AppSteps isDA={true} isDV={true} isAA={false} />
      <FormularioDadosVeiculo />
    </React.Fragment>
  )
}

export default AddDadosVeiculo