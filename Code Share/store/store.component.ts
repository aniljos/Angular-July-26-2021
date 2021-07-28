import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public data: Array<Product> = new Array<Product>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

  

  addToCart(product: Product, qty: string){
    
  }

}
