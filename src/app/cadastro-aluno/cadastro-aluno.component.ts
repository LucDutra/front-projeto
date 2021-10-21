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
<<<<<<< HEAD
    private router: Router,
=======
    private router: Router, private service: cadastroAlunoService
>>>>>>> 71ecb5b1c5a1619b6852fec92ef1264fed4ea66e

  ) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  public voltarPaginaPrincipal() {
    this.router.navigate(['']);
  }
  /*
    addCadastroAluno() {
      this.service.addCadastroAluno(this.cadastroAluno)
        .subscribe(data => {
          alert("Registro salvo com sucesso.");
          this.router.navigate(["alunoEspecifico"]);
        })
    }
  */
=======


 addAluno(){
   this.service.addAluno(this.cadastroAluno)
   .subscribe(data => {
     alert('aluno cadastrado!');
   })

 }


 public voltarPaginaPrincipal() {
  this.router.navigate(['']);
}

>>>>>>> 71ecb5b1c5a1619b6852fec92ef1264fed4ea66e
}
