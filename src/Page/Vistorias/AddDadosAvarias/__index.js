import React from 'react'
import AppSteps from '../../../components/StepsWithArrow/AppSteps';
import FormularioDadosAvaria from '../../../components/GrupoVistorias/FormularioDadosAvaria';

const AddDadosAvarias = () => {
  return (
    <React.Fragment>
      <AppSteps isDA={true} isDV={true} isAA={true} />
      <FormularioDadosAvaria />
    </React.Fragment>
  )
}

export default AddDadosAvarias