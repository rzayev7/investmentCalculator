import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentInput>();

  // @Output() calculate = new EventEmitter<{
  //   initialInvestment: number;
  //   duration: number;
  //   expectedReturn: number;
  //   annualInvestment: number;
  // }>();

  constructor(private investmentService : InvestmentService){
    
  }

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment,
      duration:+this.enteredDuration,
      annualInvestment:+this.enteredAnnualInvestment,
      expectedReturn:+this.enteredExpectedReturn
    });
    console.log('clicked');
  }
}
