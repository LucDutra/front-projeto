import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cadastroEscola } from '../entitys/cadastroEscola';
@Component({
  selector: 'app-cadastro-escola',
  templateUrl: './cadastro-escola.component.html',
  styleUrls: ['./cadastro-escola.component.css']
})
export class CadastroEscolaComponent implements OnInit {

  cadastroEscola: cadastroEscola = new cadastroEscola();

  constructor(
    
    private router : Router
  ) { }
  
  ngOnInit(): void {
  }

  public voltarPaginaPrincipal() {
    this.router.navigate(['']);
  }



}
