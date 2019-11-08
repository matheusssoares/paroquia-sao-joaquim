import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ParoquiaPage } from '../paroquia/paroquia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private loadCtrl: LoadingController, public navCtrl: NavController) {

  }
  paroquia(){
    this.loadCtrl.create({
      content: 'Carregando...',
      duration: 2000
    }).present();
    this.navCtrl.push(ParoquiaPage);
  }

}
