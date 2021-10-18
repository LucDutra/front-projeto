import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlunoEspecioComponent } from './aluno-especio/aluno-especio.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoEspecioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
