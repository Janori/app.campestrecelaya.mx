import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwimmingPoolPage } from './swimming-pool';

@NgModule({
  declarations: [
    SwimmingPoolPage,
  ],
  imports: [
    IonicPageModule.forChild(SwimmingPoolPage),
  ],
})
export class SwimmingPoolPageModule {}
