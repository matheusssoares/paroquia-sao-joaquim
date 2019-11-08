import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DizimistaPage } from './dizimista';

@NgModule({
  declarations: [
    DizimistaPage,
  ],
  imports: [
    IonicPageModule.forChild(DizimistaPage),
  ],
  exports: [
    DizimistaPage
  ]
})
export class DizimistaPageModule {}
