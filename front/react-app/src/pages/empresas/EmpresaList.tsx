import React, { useState } from "react";
import TitlePage from "../../components/TitlePage";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const empresas = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Otto",
    contato: "12123123",
    situacao: "Ativo",
  },
  {
    id: 2,
    nome: "Google",
    responsavel: "William",
    contato: "12312434",
    situacao: "Em análise",
  },
  {
    id: 3,
    nome: "Facebook",
    responsavel: "Carlos",
    contato: "21345143",
    situacao: "Ativo",
  },
  {
    id: 4,
    nome: "Amazon",
    responsavel: "Jeff",
    contato: "33333322",
    situacao: "Desativado",
  },
  {
    id: 5,
    nome: "Udemy",
    responsavel: "Kevin",
    contato: "11221122",
    situacao: "Ativo",
  },
];

const EmpresaList : React.FC = () => {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState('');

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTermoBusca(e.target.value);
  }

  const empresasFiltradas = empresas.filter((empresa) => {
    return (
      Object.values(empresa).join(' ').toLowerCase().includes(termoBusca.toLowerCase())
    )
  });

  const NovaEmpresa = () => {
    navigate('/empresa/detalhes')
  }

  return (
    <>
      <TitlePage title="Empresas" subtitle="Empresas cadastradas">
        <Button variant ='outline-light' onClick={NovaEmpresa}>
          <i className="fas fa-plus me-2"></i>
          Nova Empresa
        </Button>
        </TitlePage>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          Buscar:
        </InputGroup.Text>
        <Form.Control
          onChange={handleInputChange}
          placeholder="Digite informações da empresa"
        />
      </InputGroup>      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Responsável</th>
            <th>Contato</th>
            <th>Situação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {empresasFiltradas.map((empresa) => (
            <tr key={empresa.id}>
              <td>{empresa.id}</td>
              <td>{empresa.nome}</td>
              <td>{empresa.responsavel}</td>
              <td>{empresa.contato}</td>
              <td>{empresa.situacao}</td>
              <td>
                <button 
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => navigate(
                    `/empresa/detalhes/${empresa.id}`
                  )}>
                  <i className="fas fa-user-edit me-2"></i>
                  Editar
                </button>
                <button className="btn btn-sm btn-outline-danger me-2">
                  <i className="fas fa-user-times me-2"></i>
                  Desativar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default EmpresaList;
