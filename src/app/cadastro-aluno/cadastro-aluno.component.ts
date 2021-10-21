import { cadastroAluno } from '../entitys/cadastroAluno';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cadastroAlunoService } from '../Service/cadastroAluno.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {



  cadastroAluno: cadastroAluno = new cadastroAluno();

  constructor(
    private router: Router, private service: cadastroAlunoService

  ) { }

  ngOnInit(): void {
  }



 addAluno(){
   this.service.addAluno(this.cadastroAluno)
   .subscribe(data => {
     alert('aluno cadastrado!');
   })

 }


 public voltarPaginaPrincipal() {
  this.router.navigate(['']);
}

}
