import { TelaProfessoresComponent } from './tela-professores/tela-professores.component';
import { TabelaAlunoComponent } from './tabela-aluno/tabela-aluno.component';
import { PerfilEscolaComponent } from './perfil-escola/perfil-escola.component';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { InfoProfessorComponent } from './info-professor/info-professor.component';
import { InfoEscolaComponent } from './info-escola/info-escola.component';
import { CadastroEscolaComponent } from './cadastro-escola/cadastro-escola.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { AlunoEspecificoComponent } from './aluno-especifico/aluno-especifico.component';
import { TabelaTurmaComponent } from './tabela-turma/tabela-turma.component';
import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";




const APP_ROUTES: Routes = [


    
    { path: 'cadastroProfessor', component: CadastroProfessorComponent },
    { path: 'painelAluno', component: PainelAlunoComponent },
    { path: 'tabelaTurma', component: TabelaTurmaComponent },
    { path: 'alunoEspecifico', component: AlunoEspecificoComponent },
    { path: 'cadastroAluno', component: CadastroAlunoComponent },
    { path: 'cadastroEscola', component: CadastroEscolaComponent },
    { path: 'infoEscola', component: InfoEscolaComponent },
    { path: 'infoProfessor', component: InfoProfessorComponent },
    { path: 'listaAlunos', component: ListaAlunosComponent },
    { path: 'painelProfessor', component: PainelProfessorComponent },
    { path: 'perfilEscola', component: PerfilEscolaComponent },
    { path: 'tabelaAluno', component: TabelaAlunoComponent },
    { path: 'telaProfessor', component: TelaProfessoresComponent }

];

export const routing: ModuleWithProviders<{}> = RouterModule.forRoot(APP_ROUTES);