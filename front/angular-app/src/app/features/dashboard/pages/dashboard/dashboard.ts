import { Component } from '@angular/core';

@Component({ standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  actionCards = [
    { icon: 'fas fa-user-tie', text: 'Quero contratar funcionário' },
    { icon: 'fas fa-bullhorn', text: 'Quero divulgar uma vaga' },
    { icon: 'fas fa-briefcase', text: 'Quero trabalhar' },
    { icon: 'fas fa-child', text: 'Aprendiz' },
  ];

  statCards = [
    {
      icon: 'fas fa-file-alt',
      number: '183752',
      text: 'CURRÍCULOS',
      color: '#0d6efd',
    },
    {
      icon: 'fas fa-store',
      number: '7451',
      text: 'EMPRESAS',
      color: '#6f42c1',
    },
    {
      icon: 'fas fa-file-signature',
      number: '80497',
      text: 'VAGAS DISPONIBILIZADAS',
      color: '#fd7e14',
    },
    {
      icon: 'fas fa-book',
      number: '330',
      text: 'CURSOS JÁ DISPONIBILIZADOS',
      color: '#198754',
    },
  ];
}

