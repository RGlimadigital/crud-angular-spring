import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BensmoveisComponent } from './bensmoveis/bensmoveis.component';

const routes: Routes = [{ path: '', component: BensmoveisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BensmoveisRoutingModule {}
