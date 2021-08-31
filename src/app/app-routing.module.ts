import { RepositoryComponent } from './components/repository/repository.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:"/repository", pathMatch:"full"},
  { path: 'repository', component: RepositoryComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
