import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';
import { TabelaTurmaComponent } from './tabela-turma/tabela-turma.component';
import { AlunoEspecificoComponent } from './aluno-especifico/aluno-especifico.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CadastroEscolaComponent } from './cadastro-escola/cadastro-escola.component';
import { InfoEscolaComponent } from './info-escola/info-escola.component';
import { InfoProfessorComponent } from './info-professor/info-professor.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';
import { PerfilEscolaComponent } from './perfil-escola/perfil-escola.component';
import { TabelaAlunoComponent } from './tabela-aluno/tabela-aluno.component';
import { TelaProfessoresComponent } from './tela-professores/tela-professores.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TurmaComponent } from './turma/turma.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProfessorComponent,
    PainelAlunoComponent,
    TabelaTurmaComponent,
    AlunoEspecificoComponent,
    CadastroAlunoComponent,
    CadastroEscolaComponent,
    InfoEscolaComponent,
    InfoProfessorComponent,
    ListaAlunosComponent,
    PainelProfessorComponent,
    PerfilEscolaComponent,
    TabelaAlunoComponent,
    TelaProfessoresComponent,
    PaginaPrincipalComponent,
    TurmaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
