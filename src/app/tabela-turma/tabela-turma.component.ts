import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-turma',
  templateUrl: './tabela-turma.component.html',
  styleUrls: ['./tabela-turma.component.css']
})
export class TabelaTurmaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public voltar() {
    this.router.navigate(['/painelProfessor']);
  }

  public tabelaAluno() {
    this.router.navigate(['/tabelaAluno']);
  }

  public perfilAluno() {
    this.router.navigate(['/alunoEspecifico']);
  }

}
