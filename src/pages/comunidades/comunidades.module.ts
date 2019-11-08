import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComunidadesPage } from './comunidades';

@NgModule({
  declarations: [
    ComunidadesPage,
  ],
  imports: [
    IonicPageModule.forChild(ComunidadesPage),
  ],
  exports: [
    ComunidadesPage
  ]
})
export class ComunidadesPageModule {}
