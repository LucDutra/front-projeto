import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-escola',
  templateUrl: './info-escola.component.html',
  styleUrls: ['./info-escola.component.css']
})
export class InfoEscolaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public voltar() {
    this.router.navigate(['/painelProfessor']);
  }

}
