import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
//componentes
import { AppComponent } from './app.component';
import { CrearUsuariosComponent } from './components/crear-usuarios/crear-usuarios.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearUsuariosComponent,
    ListarUsuariosComponent,
    LoginComponent,
    NavbarComponent,
    SpinnerComponent,
    InicioComponent,
    AdminMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    HttpClientModule,
    FormsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
