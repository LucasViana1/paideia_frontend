import { SocioeconomicoComponent } from "./pages/subscriber/Inscricao/socioeconomico/socioeconomico.component";
import { RecuperacaoComponent } from "./pages/public/Acesso/recuperacao/recuperacao.component";
import { InscritosComponent } from "./pages/admin/inscritos/inscritos.component";
import { CompletoComponent } from "./pages/admin/completo/completo.component";
import { DetalhesComponent } from "./pages/admin/detalhes/detalhes.component";
import { AdmComponent } from "./pages/admin/Administrador/adm/adm.component";
import { SobreComponent } from "./pages/public/Sobre/sobre/sobre.component";
import { PerguntasComponent } from "./pages/public/Perguntas/perguntas/perguntas.component";
import { NoticiasComponent } from "./pages/public/Noticias/noticias/noticias.component";
import { ContatoComponent } from "./pages/public/Contato/contato/contato.component";
import { CadastroComponent } from "./pages/public/Cadastro/cadastro/cadastro.component";
import { LoginComponent } from "./pages/public/Acesso/login/login.component";
import { InicioComponent } from "./pages/public/Inicio/inicio/inicio.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepoimentosTodosComponent } from "./pages/public/Inicio/depoimentos-todos/depoimentos-todos.component";
import { InscricaoComponent } from "./pages/subscriber/Inscricao/inscricao/inscricao.component";
import { PessoalComponent } from "./pages/subscriber/Inscricao/pessoal/pessoal.component";
import { TermosComponent } from "./pages/subscriber/Inscricao/termos/termos.component";
import { ArquivosComponent } from "./pages/subscriber/Inscricao/arquivos/arquivos.component";
import { PageNotFoundComponent } from './pages/public/Erro/page-not-found/page-not-found.component';
import { ValidaComponent } from './pages/public/Acesso/valida/valida.component';

const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "acesso", component: LoginComponent },
  { path: "recuperacao", component: RecuperacaoComponent },
  { path: "valida", component: ValidaComponent }, // rota com guards
  { path: "cadastro", component: CadastroComponent }, // rota publica temporariamente
  { path: "contato", component: ContatoComponent },
  { path: "inicio", component: InicioComponent },
  { path: "noticias", component: NoticiasComponent },
  { path: "perguntas", component: PerguntasComponent },
  { path: "sobre", component: SobreComponent },
  { path: "depoimentos", component: DepoimentosTodosComponent },
  {
    path: "inscricao",
    component: InscricaoComponent,
    children: [
      { path: "termos", component: TermosComponent },
      { path: "pessoal", component: PessoalComponent },
      { path: "arquivos", component: ArquivosComponent },
      { path: "socioeconomico", component: SocioeconomicoComponent }
    ]
  }, // rota com guardas
  {
    path: "adm",
    component: AdmComponent,
    children: [
      { path: "inscritos", component: InscritosComponent },
      { path: "detalhes", component: DetalhesComponent },
      { path: "completo", component: CompletoComponent }
    ]
  }, // rota com guardas
  { path: "**", component: PageNotFoundComponent }, // depois criar rota para erro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
