import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'services', component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
