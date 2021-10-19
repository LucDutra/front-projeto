import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  constructor(
    private router : Router

  ) { }

  ngOnInit(): void {
  }

  public voltarPaginaPrincipal() {
    this.router.navigate(['']);
  }

}
