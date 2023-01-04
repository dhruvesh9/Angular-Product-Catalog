import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {

  products: any = [];
  categories: any = [];

  size: number;
  limit: number;
  selectedCategory: string;
  skip: number;

  constructor(private logger: LoggerService, private service: ProductService) {
    this.limit = 10;
    this.skip = 0;
    this.selectedCategory = "";
  }

  ngOnInit(): void {

    this.service
      .getProducts(this.limit, this.skip, [])
      .subscribe((data) => {
        this.logger.log("+++ getProducts");
        this.logger.log(data);
        this.products = data["products"];
        this.size = data["total"];
        this.logger.log("--- getProducts");
      });

    this.service.getCategories().subscribe((data) => {
      this.logger.log("+++ getCategories");
      this.logger.log(data);
      this.categories = data;
      this.logger.log("--- getCategories");
    });


  }

  doFilter(): void {
    console.log("called doFilter");
    this.logger.warn("Limit value - " + this.limit);
    this.logger.warn("Skip value - " + this.skip);
    this.logger.warn("Select category value - " + this.selectedCategory);

    this.service.getProductsFromCategory(this.selectedCategory, this.limit, this.skip).subscribe((data) => {
      this.logger.log("+++ getProductsFromCategory");
      this.logger.log(data);
      this.products = data["products"];
      this.size = data["total"];
      this.logger.log("--- getProductsFromCategory");
    });

  }
}
