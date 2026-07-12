import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import ActionCard from "./components/ActionCard";
import StatCard from "./components/StatCard";
import "./Dashboard.css";

const Dashboard : React.FC = () => {
  const actionCards = [
    { icon: "fas fa-user-tie", text: "Quero contratar funcionário" },
    { icon: "fas fa-bullhorn", text: "Quero divulgar uma vaga" },
    { icon: "fas fa-briefcase", text: "Quero trabalhar" },
    { icon: "fas fa-child", text: "Aprendiz" },
  ];

  const statCards = [
    {
      icon: "fas fa-file-alt",
      number: "183752",
      text: "CURRÍCULOS",
      color: "#0d6efd",
    },
    {
      icon: "fas fa-store",
      number: "7451",
      text: "EMPRESAS",
      color: "#6f42c1",
    },
    {
      icon: "fas fa-file-signature",
      number: "80497",
      text: "VAGAS DISPONIBILIZADAS",
      color: "#fd7e14",
    },
    {
      icon: "fas fa-book",
      number: "330",
      text: "CURSOS JÁ DISPONIBILIZADOS",
      color: "#198754",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Title Section */}
      <TitlePage
        title="Bem-vindo ao SINE"
        subtitle="Como posso te ajudar hoje?"
      />

      {/* Action Cards */}
      <div className="action-cards-container mt-4">
        <Row className="g-4">
          {actionCards.map((card, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <ActionCard icon={card.icon} text={card.text} />
            </Col>
          ))}
        </Row>
      </div>

      {/* o QUE E section */}
      <Container className="mt-4 text-center p-5">
        <Row className="g-4">
          <h1>
            O que é o SINE?
          </h1>
          <p>
            O SINE é uma iniciativa do Governo do Estado de Rondônia, juntamente com a SEAS, para fomento à empregabilidade,<br/> encurtando as distâncias entre empregadores e trabalhadores Rondonienses.
          </p>
        </Row>
      </Container>

      {/* Stats Section */}
      <section className="stats-section rounded-4">
        <Container className="stats-section-inner">
          <Row className="g-4">
            {statCards.map((stat, index) => (
              <Col xs={12} sm={6} md={3} key={index}>
                <StatCard
                  icon={stat.icon}
                  number={stat.number}
                  text={stat.text}
                  color={stat.color}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Floating Chat Button */}
      <div className="chat-btn">
        <i className="fas fa-headset"></i>
      </div>
    </div>
  );
}

export default Dashboard;
