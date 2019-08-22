import { NgModule } from '@angular/core';
import  {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes :Routes=[
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: async () =>  ( ( await import( "./login/login.module" ) ).LoginModule )},
  { path: 'home', component:HomeComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
