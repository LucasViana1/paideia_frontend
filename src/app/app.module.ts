import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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
import { SlidesComponent } from "./pages/public/Inicio/slides/slides.component";
import { ProcessoSeletivoComponent } from "./pages/public/Inicio/processo-seletivo/processo-seletivo.component";
import { DepoimentosComponent } from "./pages/public/Inicio/depoimentos/depoimentos.component";
import { DepoimentosTodosComponent } from "./pages/public/Inicio/depoimentos-todos/depoimentos-todos.component";
import { AdmComponent } from "./pages/admin/Administrador/adm/adm.component";
import { FormularioComponent } from "./pages/subscriber/Inscricao/formulario/formulario.component";
import { SimuladoComponent } from "./pages/subscriber/Simulado/simulado/simulado.component";
import { InscricaoComponent } from "./pages/subscriber/Inscricao/inscricao/inscricao.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PessoalComponent } from "./pages/subscriber/Inscricao/pessoal/pessoal.component";
import { TermosComponent } from "./pages/subscriber/Inscricao/termos/termos.component";

import { TextMaskModule } from "angular2-text-mask";
import { ArquivosComponent } from "./pages/subscriber/Inscricao/arquivos/arquivos.component";
import { DetalhesComponent } from "./pages/admin/detalhes/detalhes.component";
import { CompletoComponent } from "./pages/admin/completo/completo.component";
import { InscritosComponent } from "./pages/admin/inscritos/inscritos.component";
import { RecuperacaoComponent } from "./pages/public/Acesso/recuperacao/recuperacao.component";
import { SocioeconomicoComponent } from "./pages/subscriber/Inscricao/socioeconomico/socioeconomico.component";

import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./pages/public/Erro/page-not-found/page-not-found.component";
import { ValidaComponent } from "./pages/public/Acesso/valida/valida.component";
import { ConcluiInscricaoComponent } from "./pages/subscriber/Inscricao/conclui-inscricao/conclui-inscricao.component";
import { SimuladoCadastroComponent } from "./pages/admin/simulado-cadastro/simulado-cadastro.component";
import { GabaritoSimplesComponent } from "./pages/subscriber/Simulado/gabarito-simples/gabarito-simples.component";
import { SimuladoResultadoCompletoComponent } from "./pages/admin/simulado-resultado-completo/simulado-resultado-completo.component";
import { SimuladoDownloadModelosComponent } from "./pages/admin/simulado-download-modelos/simulado-download-modelos.component";
import { ResultadoSimuladoComponent } from "./pages/subscriber/Perfil/resultado-simulado/resultado-simulado.component";

import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
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
    DepoimentosComponent,
    DepoimentosTodosComponent,
    AdmComponent,
    FormularioComponent,
    SimuladoComponent,
    InscricaoComponent,
    PessoalComponent,
    TermosComponent,
    ArquivosComponent,
    DetalhesComponent,
    CompletoComponent,
    InscritosComponent,
    RecuperacaoComponent,
    SocioeconomicoComponent,
    PageNotFoundComponent,
    ValidaComponent,
    ConcluiInscricaoComponent,
    SimuladoCadastroComponent,
    GabaritoSimplesComponent,
    SimuladoResultadoCompletoComponent,
    SimuladoDownloadModelosComponent,
    ResultadoSimuladoComponent
  ],
  imports: [
    CKEditorModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
