import { SobreComponent } from "./pages/public/Sobre/sobre/sobre.component";
import { PerguntasComponent } from "./pages/public/Perguntas/perguntas/perguntas.component";
import { NoticiasComponent } from "./pages/public/Noticias/noticias/noticias.component";
import { ContatoComponent } from "./pages/public/Contato/contato/contato.component";
import { CadastroComponent } from "./pages/public/Cadastro/cadastro/cadastro.component";
import { LoginComponent } from "./pages/public/Acesso/login/login.component";
import { InicioComponent } from "./pages/public/Inicio/inicio/inicio.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepoimentosTodosComponent } from './pages/public/Inicio/depoimentos-todos/depoimentos-todos.component';

const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "acesso", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "contato", component: ContatoComponent },
  { path: "inicio", component: InicioComponent },
  { path: "noticias", component: NoticiasComponent },
  { path: "perguntas", component: PerguntasComponent },
  { path: "sobre", component: SobreComponent },
  { path: "depoimentos", component: DepoimentosTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
