import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { VotacionComponent } from './votaciones/votacion/votacion.component';
import { PaginaPrincipalVotanteComponent } from './components/pagina-principal-votante/pagina-principal-votante.component';
import { FormularioVotacionComponent } from './components/formulario-votacion/formulario-votacion.component';
import { AgregarNuevoCandidatoComponent } from './components/agregar-nuevo-candidato/agregar-nuevo-candidato.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        VotacionComponent,
        PaginaPrincipalVotanteComponent,
        FormularioVotacionComponent,
        AgregarNuevoCandidatoComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };