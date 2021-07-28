import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ICartService } from '../services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public data: Array<Product> = new Array<Product>();

  constructor(private httpClient: HttpClient, private cartService: ICartService) {

    this.fetch()

  }
  ngOnInit(): void {
  }
  fetch() {

    const url = "http://localhost:9000/products";
    this.httpClient
      .get<Array<Product>>(url)
      .subscribe((data) => {
        console.log("success: ", data);
        this.data = data;
      }, (resp) => {
        console.log("error: ", resp);
      });
  }
  addToCart(product: Product, qty: string){

    this.cartService.add({product, quantity: parseInt(qty)})
  }

}
