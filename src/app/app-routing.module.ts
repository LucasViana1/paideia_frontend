import { CadastroComponent } from "./pages/public/Cadastro/cadastro/cadastro.component";
import { LoginComponent } from "./pages/public/Acesso/login/login.component";
import { InicioComponent } from "./pages/public/Inicio/inicio/inicio.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "acesso", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
