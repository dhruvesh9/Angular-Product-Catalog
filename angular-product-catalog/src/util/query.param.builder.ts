import { Injectable } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Injectable()
export class QueryParamBuilder {
  private logger: LoggerService;
  private queryParamsMap: Map<string, string>;
  constructor() {
    this.logger = new LoggerService();
    this.queryParamsMap = new Map();
  }

  addKeyValue(key: string, value: string) {
    if (key != null && key != '' && value != null && value!='') {
      this.logger.log('Adding >>> ' + key + ' -- ' + value);
      this.queryParamsMap.set(key, value);
    }
  }

  retrieveQueryString(): string {
    let queryString: string = '';
    this.logger.log(
      'queryParamsMap >>> ' + JSON.stringify(this.queryParamsMap)
    );
    for (let [key, value] of this.queryParamsMap.entries()) {
      queryString = queryString + key + '=' + value + '&';
    }
    this.logger.log('Retrieve final query string >>> ' + queryString);
    return queryString;
  }
}
