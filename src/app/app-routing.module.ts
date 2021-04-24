import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { UserManagerComponent } from './modules/user-manager/components/user-manager/user-manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'app', component: MainComponent, children: [
    { path: '', component: DashboardComponent, outlet: 'app' },
    { path: 'dashboard', component: DashboardComponent, outlet: 'app' },
    { path: 'user-manager', component: UserManagerComponent, outlet: 'app' },
    // { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule', outlet: 'app' },
    // { path: 'user-manager', loadChildren: './modules/user-manager/user-manager.module#UserManagerModule', outlet: 'app' },
  ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
