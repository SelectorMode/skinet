import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestModuleMetadata } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem } from '../../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement: EventEmitter<any> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<any> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<any> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasket){
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasket){
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasket){
    this.remove.emit(item);
  }
}
