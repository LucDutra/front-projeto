import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-escola',
  templateUrl: './perfil-escola.component.html',
  styleUrls: ['./perfil-escola.component.css']
})
export class PerfilEscolaComponent implements OnInit {

  constructor(

    private router : Router
  ) { }

  ngOnInit(): void {
  }

  public voltarPaginaPrincipal() {
    this.router.navigate(['']);
  }

  public cadastrarEscola() {
    this.router.navigate(['/cadastroEscola']);
  }

}
