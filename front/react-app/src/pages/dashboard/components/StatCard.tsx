import React from 'react';
import { Card } from 'react-bootstrap';

interface StatCardProps {
  icon: string,
  number: string,
  text: string,
  color: string,
}

const StatCard : React.FC<StatCardProps> = ({ icon, number, text, color } : StatCardProps) => {
  return (
    <Card className="shadow-sm border-0 stat-card h-100">
      <Card.Body className="d-flex align-items-center p-3">
        <div className="stat-icon-wrapper me-3" style={{ color: color }}>
          <i className={`${icon} fa-3x`}></i>
        </div>
        <div>
          <h3 className="mb-0 fw-bold">{number}</h3>
          <small className="text-muted text-uppercase fw-bold" style={{fontSize: '0.65rem'}}>{text}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
