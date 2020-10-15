import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XRPPage } from './xrp.page';

const routes: Routes = [
  {
    path: '',
    component: XRPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XRPPageRoutingModule {}
