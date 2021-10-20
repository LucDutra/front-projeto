import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-exemplo';

  constructor(private router: Router) {
    
  }

  getPessoa() {
    this.router.navigate(["listar"]);
  }

  addPessoa() {
    this.router.navigate(["adicionar"]);  
  }

}
