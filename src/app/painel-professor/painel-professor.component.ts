import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-professor',
  templateUrl: './painel-professor.component.html',
  styleUrls: ['./painel-professor.component.css']
})
export class PainelProfessorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public telaInfoProfessor() {
    this.router.navigate(['/infoProfessor']);
  }

  public telaInfoEscola() {
    this.router.navigate(['/infoEscola']);
  }

  public telaTabelaTurma() {
    this.router.navigate(['/tabelaTurma']);
  }

}
