import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//Declare a global variable
//when call inside function need to use this
//Can call on home.html
	height
	weight
	bmi
	message

  constructor() {}


  buttonPressed(){
//local variable
//BMI Formula (weight / height * 2)

let name = "Azura";
let heightCM = this.height/100

this.bmi = (this.weight / Math.pow((heightCM),2)).toFixed(2)

//TODO - bring out on UI


 //BMI - 18 < Underweight, 18-25 Normal, 25-30 Overweight, >30 Obese



  if (this.bmi < 18) {
    this.message = "Underweight"
  }

  if (this.bmi > 18 && this.bmi < 25) {
    this.message = "Normal"
  }

  if (this.bmi > 25 && this.bmi < 30) {
    this.message = "Overweight"
  }

  if (this.bmi > 30) {
    this.message = "Obese"
  }
} 


}

