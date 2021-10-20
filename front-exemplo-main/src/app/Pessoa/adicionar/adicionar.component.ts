import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/Entity/Pessoa';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
  }


  addPessoa() {
    this.service.addPessoa(this.pessoa)
      .subscribe(data => {
        alert("Registro salvo com sucesso.");
        this.router.navigate(["listar"]);
      })
  }
}
