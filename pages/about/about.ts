import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ["about.css"]
})
export class AboutPage {

tuitionfee: number;
paymentTerms: number;

totaltuition: number;
interestrate: number;
totalinterestpayable: number;
totalamountspayable: number;
monthlypayment: number;

  constructor(public navCtrl: NavController) {

  }
compute() {
  this.interestrate = (0.75);
  this.totalinterestpayable = (this.tuitionfee * this.interestrate / 100)*(this.paymentTerms);
  this.totaltuition = (this.tuitionfee * 1)
  this.totalamountspayable = (this.totalinterestpayable + this.totaltuition);
  this.monthlypayment = (this.totalamountspayable / this.paymentTerms);


  }

}
