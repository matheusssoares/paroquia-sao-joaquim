import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParoquiaPage } from './paroquia';

@NgModule({
  declarations: [
    ParoquiaPage,
  ],
  imports: [
    IonicPageModule.forChild(ParoquiaPage),
  ],
  exports: [
    ParoquiaPage
  ]
})
export class ParoquiaPageModule {}
