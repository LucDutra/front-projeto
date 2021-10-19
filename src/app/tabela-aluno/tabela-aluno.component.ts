import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-aluno',
  templateUrl: './tabela-aluno.component.html',
  styleUrls: ['./tabela-aluno.component.css']
})
export class TabelaAlunoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public voltar() {
    this.router.navigate(['/tabelaTurma']);
  }

}
