
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
