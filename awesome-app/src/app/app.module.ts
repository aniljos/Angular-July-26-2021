import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TempratureConverterComponent } from './converter/temprature-converter.component';
import { DataBindingComponent } from './databinding/databinding.componet';
import { HelloComponent } from './hello/hello.component';

// commented to do a lazy-load
//import { ProductsModule } from './products/products.module';

import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { GadgetStoreComponent } from './gadget-store/gadget-store.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService, ICartService } from './services/cart.service';

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "binding", component: DataBindingComponent},
  {path: "converter", component: TempratureConverterComponent},
  {path: "gadgets", component: GadgetStoreComponent, children: [
    {path: "store", component: StoreComponent},
    {path: "cart", component: ViewCartComponent}
  ]},
  {path: "login", component: LoginComponent},
  {path: "products", loadChildren:  
          () => import('./products/products.module').then(item => item.ProductsModule)}

];

@NgModule({
  declarations: [
    AppComponent, HelloComponent, 
    DataBindingComponent, TempratureConverterComponent, 
    LoginComponent, StoreComponent, ViewCartComponent, GadgetStoreComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
 //   ProductsModule, for lazy loading
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule

   
  ],
  providers: [{provide: ICartService, useClass: CartService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
