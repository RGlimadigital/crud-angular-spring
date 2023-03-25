import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Iniciamos aqui com um redirecionamento da página principal.
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  //Exemplo de lazy loading
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'bensmoveis',
    loadChildren: () =>
      import('./bensmoveis/bensmoveis.module').then((m) => m.BensmoveisModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
