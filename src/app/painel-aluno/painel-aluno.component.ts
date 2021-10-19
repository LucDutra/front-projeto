import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-aluno',
  templateUrl: './painel-aluno.component.html',
  styleUrls: ['./painel-aluno.component.css']
})
export class PainelAlunoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public voltar() {
    this.router.navigate(['/alunoEspecifico']);
  }

}
