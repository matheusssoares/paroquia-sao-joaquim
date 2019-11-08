import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParoquiaPageModule } from '../pages/paroquia/paroquia.module';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AgendaPageModule } from '../pages/agenda/agenda.module';
import { NoticiasPageModule } from '../pages/noticias/noticias.module';
import { ComunidadesPageModule } from '../pages/comunidades/comunidades.module';
import { MissasPageModule } from '../pages/missas/missas.module';
import { OracoesPageModule } from '../pages/oracoes/oracoes.module';
import { SacramentosPageModule } from '../pages/sacramentos/sacramentos.module';
import { DizimistaPageModule } from '../pages/dizimista/dizimista.module';
import { PedirOracaoPageModule } from '../pages/pedir-oracao/pedir-oracao.module';
import { ContatosPageModule } from '../pages/contatos/contatos.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    ParoquiaPageModule,
    AgendaPageModule,
    NoticiasPageModule,
    ComunidadesPageModule,
    MissasPageModule,
    OracoesPageModule,
    SacramentosPageModule,
    DizimistaPageModule,
    PedirOracaoPageModule,
    ContatosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
