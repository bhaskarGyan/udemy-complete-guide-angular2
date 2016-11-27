import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../../Services/shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe:Recipe;
  constructor(private shoppingListService:ShoppingListService) {

  }

  ngOnInit() {
  }

  addToShoppingList(){
    this.shoppingListService.addShoppingList(this.selectedRecipe.ingredient);
  }
}
