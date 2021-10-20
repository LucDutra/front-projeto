import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../Entity/Pessoa';
import { PercentPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/";

  pessoa = this.url + "/pessoa";

  getPessoa() {
    return this.http.get<Pessoa[]>(this.url);
  }

  addPessoa(pessoa: Pessoa) {
    return this.http.post<Pessoa>(this.url, pessoa);
  }

  getPessoaById(id: number) {
    return this.http.get<Pessoa>(this.url + "/" + id);
  }

  update(pessoa: Pessoa) {
    return this.http.put<Pessoa>(this.url + "/" + pessoa.id, pessoa);
  }
}