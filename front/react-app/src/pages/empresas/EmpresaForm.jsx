import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function EmpresaForm() {  
  const navigate = useNavigate();
  let {id} = useParams();
  return (
    <>
    <TitlePage title={'Detalhes Empresa ' + (id !== undefined ? id : '')} subtitle="Formulário">
      <Button variant='outline-light' onClick={() => navigate('/empresa/lista')}>
        <i className="fas fa-arrow-left me-2"></i>
        Voltar
      </Button>
      </TitlePage>
    </>
  )
}

export default EmpresaForm