import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PostsComponent } from './component/posts/posts.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

const routes: Routes = [
  { path: 'overview', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard]},
  { path: '', component: WelcomeComponent},
  /*{ path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component:HeroDetailComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
