import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { PaginaPrincipalVotanteComponent } from './components/pagina-principal-votante/pagina-principal-votante.component';
import { FormularioVotacionComponent } from './components/formulario-votacion/formulario-votacion.component';
import { AgregarNuevoCandidatoComponent } from './components/agregar-nuevo-candidato/agregar-nuevo-candidato.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'indexUsuario', component: PaginaPrincipalVotanteComponent},
    { path: 'indexJefeGrupo', component:FormularioVotacionComponent}, 
    { path: 'agregarNuevoJefe', component:AgregarNuevoCandidatoComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }