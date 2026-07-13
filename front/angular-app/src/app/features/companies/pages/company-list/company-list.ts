import { Component } from '@angular/core';

@Component({ standalone: false,
  selector: 'app-company-list',
  templateUrl: './company-list.html',
  styleUrls: ['./company-list.css']
})
export class CompanyListComponent {
  empresas = [
    { id: 1, nome: "Microsoft", responsavel: "Otto", contato: "12123123", situacao: "Ativo" },
    { id: 2, nome: "Google", responsavel: "William", contato: "12312434", situacao: "Em análise" },
    { id: 3, nome: "Facebook", responsavel: "Carlos", contato: "21345143", situacao: "Ativo" },
    { id: 4, nome: "Amazon", responsavel: "Jeff", contato: "33333322", situacao: "Desativado" },
    { id: 5, nome: "Udemy", responsavel: "Kevin", contato: "11221122", situacao: "Ativo" },
  ];

  termoBusca = '';

  get empresasFiltradas() {
    return this.empresas.filter(empresa => {
      return Object.values(empresa).join(' ').toLowerCase().includes(this.termoBusca.toLowerCase());
    });
  }
}

