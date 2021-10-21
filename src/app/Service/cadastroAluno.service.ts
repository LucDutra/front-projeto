import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cadastroAluno } from "../entitys/cadastroAluno";

@Injectable({
    providedIn: 'root'
})

export class cadastroAlunoService {
    constructor(private http: HttpClient) {}

     url = "http//localhost:8080/aluno";

     addAluno(cadastroAluno: cadastroAluno ){
         return this.http.post<cadastroAluno>(this.url, cadastroAluno)
     }

     getAluno() {
         return this.http.get<cadastroAluno[]>(this.url);
     }
}

