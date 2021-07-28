import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export abstract class ICartService{

  public abstract add(item: any): void;
  public abstract get(): Array<any>
}


// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class CartService extends ICartService{

  private cart = new Array<any>();

  constructor(private httpClinet: HttpClient) { 
    super();
  }

  public add(item: any): void{
    this.cart.push(item);
  }

  public get(): Array<any>{

    //return a copy of the cart
    return [...this.cart];
  }

}
