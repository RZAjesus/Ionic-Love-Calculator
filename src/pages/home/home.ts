import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nameOne = '';
  nameTwo = '';
  //Method to get score using character codes
  //case-insensitive
  get score() {
    const letters = (this.nameOne + this.nameTwo).toLowerCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
    // use modulus to limit results to percentages between 1 and 100
    return sum % 101;
  }


  constructor(public navCtrl: NavController) {

  }

}
