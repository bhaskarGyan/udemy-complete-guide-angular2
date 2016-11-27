import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient';

@Injectable()
export class ShoppingListService {
  items: Ingredient[] = [];
  constructor() { }

  getShoppingList() {
    return this.items;
  }

  addShoppingList(shoppingList:Ingredient[]){
    Array.prototype.push.apply(this.items,shoppingList);
  }
}
