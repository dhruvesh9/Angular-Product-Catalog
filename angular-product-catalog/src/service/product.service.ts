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
  ) {}

  getProducts(limit: number, skip: number, select: []) {
    let productsUrl = environment.productsBaseUrl + '?';

    this.queryParamBuilder.addKeyValue('limit', limit.toString());
    this.queryParamBuilder.addKeyValue('skip', skip.toString());
    this.queryParamBuilder.addKeyValue('select', select.toString());

    productsUrl =
      productsUrl + '?' + this.queryParamBuilder.retrieveQueryString();
    this.logger.debug(productsUrl);
    return this.http.get(productsUrl);
  }

  retrieveProduct(id: Number) {
    if (id > 0) {
      let singleProductUrl = environment;
    }
  }
}
