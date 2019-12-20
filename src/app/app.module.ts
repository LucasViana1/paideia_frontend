import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InicioComponent } from "./pages/public/Inicio/inicio/inicio.component";
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { RodapeComponent } from "./components/rodape/rodape.component";
import { LoginComponent } from "./pages/public/Acesso/login/login.component";
import { CadastroComponent } from "./pages/public/Cadastro/cadastro/cadastro.component";
import { ContatoComponent } from "./pages/public/Contato/contato/contato.component";
import { NoticiasComponent } from "./pages/public/Noticias/noticias/noticias.component";
import { PerguntasComponent } from "./pages/public/Perguntas/perguntas/perguntas.component";
import { SobreComponent } from "./pages/public/Sobre/sobre/sobre.component";
import { SlidesComponent } from './pages/public/Inicio/slides/slides.component';
import { ProcessoSeletivoComponent } from './pages/public/Inicio/processo-seletivo/processo-seletivo.component';
import { DepoimentosComponent } from './pages/public/Inicio/depoimentos/depoimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabecalhoComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    ContatoComponent,
    NoticiasComponent,
    PerguntasComponent,
    SobreComponent,
    SlidesComponent,
    ProcessoSeletivoComponent,
    DepoimentosComponent
  ],
  imports: [NgbModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
