import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { QueryParamBuilder } from '../util/query.param.builder';
import { environment } from '../environments/environment';

@Injectable()
export class ProductService {
  constructor(
    private logger: LoggerService,
    private http: HttpClient,
    private queryParamBuilder: QueryParamBuilder
  ) { }

  getProducts(limit: number, skip: number, select: []) {
    let productsUrl = environment.productsBaseUrl;

    this.queryParamBuilder.addKeyValue('limit', limit.toString());
    this.queryParamBuilder.addKeyValue('skip', skip.toString());
    this.queryParamBuilder.addKeyValue('select', select.toString());

    productsUrl =
      productsUrl + '?' + this.queryParamBuilder.retrieveQueryString();
    this.logger.log("Generated get all products url : " + productsUrl);
    return this.http.get(productsUrl);
  }

  retrieveProduct(id: Number) {
    if (id > 0) {
      let singleProductUrl = environment;
    }
  }

  getCategories() {
    let productsCategoriesUrl = environment.productsBaseUrl + "/categories";
    this.logger.log("products all categories url : "+productsCategoriesUrl);
    return this.http.get(productsCategoriesUrl)
  }

  getProductsFromCategory(category: string, limit: number, skip: number) {
    if (category != null && category != "") {
      let productsCategoryUrl = environment.productsBaseUrl + "/category/" + category;

      this.queryParamBuilder.addKeyValue("limit", limit.toString());
      this.queryParamBuilder.addKeyValue("skip", skip.toString());

      productsCategoryUrl = productsCategoryUrl + "?" + this.queryParamBuilder.retrieveQueryString();

      this.logger.log("Generated get all category products url : " + productsCategoryUrl);

      return this.http.get(productsCategoryUrl);
    }else{
      return this.getProducts(limit,skip,[]);
    }

  }
}
