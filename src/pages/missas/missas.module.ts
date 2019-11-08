import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissasPage } from './missas';

@NgModule({
  declarations: [
    MissasPage,
  ],
  imports: [
    IonicPageModule.forChild(MissasPage),
  ],
  exports: [
    MissasPage
  ]
})
export class MissasPageModule {}
