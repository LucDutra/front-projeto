import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alunoEspecifico } from '../entitys/alunoEspecifico';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeralService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:8080";

  alunoEspecificoUrl = this.baseURL + "/alunoEspecifico";



// CRUD Aluno especifico INICIO  <------------------
  
  getAlunoEspecifico() {
    return this.http.get<alunoEspecifico[]>(this.alunoEspecificoUrl);
  }

  addAlunoEspecifico(alunoEspecifico: alunoEspecifico) {
    return this.http.post<alunoEspecifico>(this.alunoEspecificoUrl, alunoEspecifico);
  }

  getAlunoEspecificoById(id: number) {
    return this.http.get<alunoEspecifico>(this.alunoEspecificoUrl + "/" + id);
  }

  update(alunoEspecifico: alunoEspecifico) {
    return this.http.put<alunoEspecifico>(this.baseURL + "/" + alunoEspecifico.id, alunoEspecifico);
  }
  // CRUD Aluno especifico FINAL  <------------------


  

}
