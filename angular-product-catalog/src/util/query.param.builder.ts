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
    if (key != null && key != '' && value != null) {
      this.logger.debug('Adding >>> ' + key + ' -- ' + value);
      this.queryParamsMap.set(key, value);
    }
  }

  retrieveQueryString(): string {
    let queryString: string = '';
    this.logger.debug(
      'queryParamsMap >>> ' + JSON.stringify(this.queryParamsMap)
    );
    for (let [key, value] of this.queryParamsMap.entries()) {
      queryString = queryString + key + '=' + value + '&';
    }
    this.logger.debug('Retrieve final query string >>> ' + queryString);
    return queryString;
  }
}
