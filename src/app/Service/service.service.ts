import { cadastroAluno } from '../entitys/cadastroAluno';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alunoEspecifico } from '../entitys/alunoEspecifico';
import { cadastroEscola } from '../entitys/cadastroEscola';
import { cadastroProfessor } from '../entitys/cadastroProfessor';
import { infoEscola } from '../entitys/infoEscola';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:8080";

  alunoEspecificoUrl = this.baseURL + "/aluno";



  // CRUD Aluno especifico INICIO  <------------------

  getAlunoEspecifico() {
    return this.http.get<alunoEspecifico[]>(this.alunoEspecificoUrl);
  }

  addAlunoEspecifico(alunoEspecifico: alunoEspecifico) {
    return this.http.post<alunoEspecifico>(this.alunoEspecificoUrl, alunoEspecifico);
  }

  getAlunoEspecificoById(id: number) {
    return this.http.get<alunoEspecifico>(this.baseURL + "/" + id);
  }

  update(alunoEspecifico: alunoEspecifico) {
    return this.http.put<alunoEspecifico>(this.baseURL + "/" + alunoEspecifico.id, alunoEspecifico);
  }
  // CRUD Aluno especifico FINAL  <------------------

  

  // CRUD Cadasto ALUNO INICIO  <------------------
  cadastroAlunoUrl = this.baseURL + "/cadastroAluno";

  addCadastroAluno(cadastroAluno: cadastroAluno) {
    return this.http.post<cadastroAluno>(this.cadastroAlunoUrl, cadastroAluno);
  }

  getCadastroAluno() {
    return this.http.get<cadastroAluno[]>(this.cadastroAlunoUrl);
  }
  // CRUD Cadasto ALUNO  FINAL  <------------------



  // CRUD Cadastro ESCOLA INICIO <------------------
  cadastroEscolaUrl = this.baseURL + "/cadastroEscola"

  addCadastroEscola(cadastroEscola: cadastroEscola) {
    return this.http.post<cadastroEscola>(this.cadastroEscolaUrl, cadastroEscola);

  }

  getCadastroEscola() {
    return this.http.get<cadastroEscola[]>(this.cadastroEscolaUrl);

  }
  // CRUD Cadastro ESCOLA FINAL <------------------

  

  // CRUD Cadastro PROFESSOR INICIO <------------------
  cadastroProfesor = this.baseURL + "/cadastroProfessor"

  addCadastroProfessor(cadastroProfesor: cadastroProfessor) {
    return this.http.post<cadastroProfessor>(this.cadastroProfesor, cadastroProfesor);

  }

  getCadastroProfessor() {
    return this.http.get<cadastroEscola[]>(this.cadastroEscolaUrl);

  }
  // CRUD Cadastro PROFESSOR FINAL <------------------

   // CRUD info ESCOLA INICIO <------------------
    infoEscola = this.baseURL + "/infoEscola"

    getInfoEscola() {
    return this.http.get<infoEscola[]>(this.infoEscola);
  }

    deleteInfoEscola(){
      return this.http.delete<infoEscola[]>(this.infoEscola)
    }
  // CRUD Cadastro PROFESSOR FINAL <------------------

}
