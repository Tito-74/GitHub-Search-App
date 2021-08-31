import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent } from './components/repository/repository.component';

import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:"/landing", pathMatch:"full"},
  { path: 'landing', component: LandingComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'repository', component: RepositoryComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
