import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

    const url = "http://localhost:9000/products";
    this.httpClient
      .get(url)
      .subscribe((data) => {
        console.log("success: ", data);
      }, (resp) => {
        console.log("error: ", resp);
      });

  }

  ngOnInit(): void {
  }

}
