import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ParoquiaPage } from '../pages/paroquia/paroquia';
import { AgendaPage } from '../pages/agenda/agenda';
import { NoticiasPage } from '../pages/noticias/noticias';
import { ComunidadesPage } from '../pages/comunidades/comunidades';
import { MissasPage } from '../pages/missas/missas';
import { OracoesPage } from '../pages/oracoes/oracoes';
import { SacramentosPage } from '../pages/sacramentos/sacramentos';
import { DizimistaPage } from '../pages/dizimista/dizimista';
import { PedirOracaoPage } from '../pages/pedir-oracao/pedir-oracao';
import { ContatosPage } from '../pages/contatos/contatos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  
  constructor(public menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  inicio(){
    this.menuCtrl.toggle();
    this.nav.setRoot(HomePage);
  }
  paroquia(){
    this.menuCtrl.toggle();
    this.nav.push(ParoquiaPage);
  }
  agenda(){
    this.menuCtrl.toggle();
    this.nav.push(AgendaPage);
  }
  noticias(){
    this.menuCtrl.toggle();
    this.nav.push(NoticiasPage);
  }
  comunidades(){
    this.menuCtrl.toggle();
    this.nav.push(ComunidadesPage);
  }
  missas(){
    this.menuCtrl.toggle();
    this.nav.push(MissasPage);
  }
  oracoes(){
    this.menuCtrl.toggle();
    this.nav.push(OracoesPage);
  }
  sacramentos(){
    this.menuCtrl.toggle();
    this.nav.push(SacramentosPage);
  }
  dizimista(){
    this.menuCtrl.toggle();
    this.nav.push(DizimistaPage);
  }
  pedir_oracao(){
    this.menuCtrl.toggle();
    this.nav.push(PedirOracaoPage);
  }
  contatos(){
    this.menuCtrl.toggle();
    this.nav.push(ContatosPage);
  }
}
