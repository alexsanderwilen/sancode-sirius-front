import React from 'react'
import FormularioDadosVeiculoFotos from '../../../components/GrupoVistorias/FormularioDadosVeiculoFotos';
import AppSteps from '../../../components/StepsWithArrow/AppSteps';

const AddDadosVeiculoFotos = () => {
  return (
    <React.Fragment>
      <AppSteps isDA={true} isDV={true} isAA={false} />      
      <FormularioDadosVeiculoFotos/>
    </React.Fragment>
  )
}

export default AddDadosVeiculoFotos