import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OracoesPage } from './oracoes';

@NgModule({
  declarations: [
    OracoesPage,
  ],
  imports: [
    IonicPageModule.forChild(OracoesPage),
  ],
  exports: [
    OracoesPage
  ]
})
export class OracoesPageModule {}
