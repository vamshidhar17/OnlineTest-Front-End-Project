import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
  {path:"login", component:RegisterComponent},
  {path:"start", component:StartComponent},
  {path:"test", component:TestComponent},
  {path:"finish", component:FinishComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"**",redirectTo:"/login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
