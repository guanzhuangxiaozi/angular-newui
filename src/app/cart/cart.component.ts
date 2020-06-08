import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartSerive : CartService,
    private formBuilder : FormBuilder,
  ){
    this.checkoutForm = this.formBuilder.group({
      name : '',
      address :''
    })
   }

  ngOnInit() {
    this.items = this.cartSerive.getItems();
  }

  onSubmit(custData){
    console.warn('Your order has benn submitted',custData);
    this.items = this.cartSerive.clearCart();
    this.checkoutForm.reset();
  }
}