import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  constructor(private logger: LoggerService, private service: ProductService) {}

  ngOnInit(): void {
    this.service
      .getProducts(1, 0, [])
      .subscribe((data): any => this.logger.log(data));
  }
}
