import React from 'react'
import FormularioDadosAssociado from '../../../components/GrupoVistorias/FormularioDadosAssociados';
import AppSteps from '../../../components/StepsWithArrow/AppSteps';

const AddDadosAssociados = () => {
  return (
    <React.Fragment>
      <AppSteps isDA={true} isDV={false} isAA={false} />
      <FormularioDadosAssociado/>
    </React.Fragment>
  )
}

export default AddDadosAssociados



