import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'

function EmpresaForm() {  
  const history = useHistory();
  let {id} = useParams();
  return (
    <>
    <TitlePage title={'Detalhes Empresa ' + (id !== undefined ? id : '')} subtitle="Formulário">
      <Button variant='outline-light' onClick={() => history.push('/empresa/lista')}>
        <i className="fas fa-arrow-left me-2"></i>
        Voltar
      </Button>
      </TitlePage>
    </>
  )
}

export default EmpresaForm