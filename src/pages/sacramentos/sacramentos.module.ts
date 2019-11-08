import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SacramentosPage } from './sacramentos';

@NgModule({
  declarations: [
    SacramentosPage,
  ],
  imports: [
    IonicPageModule.forChild(SacramentosPage),
  ],
  exports: [
    SacramentosPage
  ]
})
export class SacramentosPageModule {}
