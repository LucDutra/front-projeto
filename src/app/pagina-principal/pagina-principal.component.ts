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

  public telaPerfilEscola() {
    this.router.navigate(['/perfilEscola']);
  }

  public telaCadastroAluno() {
    this.router.navigate(['/cadastroAluno']);
  }

  public telaCadastroProfessor() {
    this.router.navigate(['/cadastroProfessor']);
  }

  

}
