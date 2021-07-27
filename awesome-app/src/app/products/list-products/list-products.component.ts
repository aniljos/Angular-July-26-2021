import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public data: Array<Product> = new Array<Product>();
  public searchKey: string= "";
  public nproduct: Product = new Product();


  constructor(private httpClient: HttpClient) {

   this.fetch();

  }

  ngOnInit(): void {
  }

  fetch(){
    
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

  save(){

    const url = "http://localhost:9000/products";
    this.httpClient
        .post(url, this.nproduct)
        .subscribe(() => {

          alert("record saved");
          this.fetch();
          this.nproduct = new Product();


        }, () => {

          alert("Failed to save");
        });


  }

}
