import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedirOracaoPage } from './pedir-oracao';

@NgModule({
  declarations: [
    PedirOracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(PedirOracaoPage),
  ],
  exports: [
    PedirOracaoPage
  ]
})
export class PedirOracaoPageModule {}
