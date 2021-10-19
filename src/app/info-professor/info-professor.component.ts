import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-professor',
  templateUrl: './info-professor.component.html',
  styleUrls: ['./info-professor.component.css']
})
export class InfoProfessorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public voltar() {
    this.router.navigate(['/painelProfessor']);
  }
}
