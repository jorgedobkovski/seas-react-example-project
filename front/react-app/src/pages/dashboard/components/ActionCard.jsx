import React from 'react';
import { Card } from 'react-bootstrap';
import './ActionCard.css';

const ActionCard = ({ icon, text }) => {
  return (
    <Card className="text-center h-100 shadow-sm border-0 py-4 action-card">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <div className="icon-wrapper-circle mb-3">
          <i className={`${icon} fa-2x`}></i>
        </div>
        <Card.Text className="fw-medium text-dark">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ActionCard;
