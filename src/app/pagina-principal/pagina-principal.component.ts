import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(
    private router : Router

  ) { }

  ngOnInit(): void {
  }

  public PerfilEscola() {
    this.router.navigate(['/perfilEscola']);
  }

  public CadastroAluno() {
    this.router.navigate(['/cadastroAluno']);
  }

  public CadastroProfessor() {
    this.router.navigate(['/cadastroProfessor']);
  }

  public TabelaTurma() {
    this.router.navigate(['/turma']);
  }

  

}
