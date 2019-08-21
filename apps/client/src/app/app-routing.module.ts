import { NgModule } from '@angular/core';
import  {RouterModule,Routes} from '@angular/router';

const routes :Routes=[
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: async () =>  ( ( await import( "./login/login.module" ) ).LoginModule )}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
