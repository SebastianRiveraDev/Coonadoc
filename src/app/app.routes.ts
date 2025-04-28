import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { OnlineComponent } from './online/online.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'online', component: OnlineComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
