import { cadastroAluno } from '../entitys/cadastroAluno';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  cadastroAluno: cadastroAluno = new cadastroAluno();

  constructor(
    private router: Router, private service: ServiceService

  ) { }

  ngOnInit(): void {
  }

  public voltarPaginaPrincipal() {
    this.router.navigate(['']);
  }

  addCadastroAluno() {
    this.service.addCadastroAluno(this.cadastroAluno)
      .subscribe(data => {
        alert("Registro salvo com sucesso.");
        this.router.navigate(["alunoEspecifico"]);
      })
  }

}
