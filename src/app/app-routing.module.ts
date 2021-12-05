import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtoComponent } from './butto/butto.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:"full"},
  {path:'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'user/:id',component: UserComponent},
  {path: 'butto',component: ButtoComponent},
  {path:"**",component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
