import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { CrearUsuariosComponent } from './components/crear-usuarios/crear-usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listar-usuarios', component: ListarUsuariosComponent },
  { path: 'crear-usuario', component: CrearUsuariosComponent },
  // { path: 'editar-usuario/:id', component: CrearUsuariosComponent },
  { path: 'admin-menu', component: AdminMenuComponent },

  
  //Esta linea siempre debe estar al final
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
