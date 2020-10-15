import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XRPPageRoutingModule } from './xrp-routing.module';

import { XRPPage } from './xrp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XRPPageRoutingModule
  ],
  declarations: [XRPPage]
})
export class XRPPageModule {}
