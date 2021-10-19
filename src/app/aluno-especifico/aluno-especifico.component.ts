import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-especifico',
  templateUrl: './aluno-especifico.component.html',
  styleUrls: ['./aluno-especifico.component.css']
})
export class AlunoEspecificoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public voltar() {
    this.router.navigate(['/tabelaTurma']);
  }

  public perfilAluno() {
    this.router.navigate(['/painelAluno']);
  }

}
