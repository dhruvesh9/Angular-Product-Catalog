import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/shopping-cart/shopping.cart.component';
import { ProductsListComponent } from '../products-list/products-list.component';

const routes: Routes = [{ path: 'products', component: ProductsListComponent },
{ path: 'shoppingCart', component: ShoppingCartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
