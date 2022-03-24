import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  { path: 'posts', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
