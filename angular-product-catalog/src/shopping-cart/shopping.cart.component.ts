import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/service/logger.service';

@Component({
    selector: 'shopping-cart',
    templateUrl: 'shopping.cart.component.html'
})

export class ShoppingCartComponent implements OnInit {
    constructor(private logger : LoggerService) { }

    ngOnInit() { }
}