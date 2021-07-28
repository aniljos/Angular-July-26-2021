import { Component, OnInit } from '@angular/core';
import { ICartService } from '../services/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  public cart: Array<any> = new Array<any>();

  constructor(private cartService: ICartService) { }

  ngOnInit(): void {

    this.cart = this.cartService.get();
  }

}
