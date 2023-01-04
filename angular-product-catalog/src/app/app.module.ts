import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoggerService } from '../service/logger.service';
import { ProductService } from '../service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { QueryParamBuilder } from '../util/query.param.builder';
import { ShoppingCartComponent } from 'src/shopping-cart/shopping.cart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, ProductsListComponent, ShoppingCartComponent],
  providers: [
    LoggerService,
    ProductService,
    HttpClientModule,
    QueryParamBuilder,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
