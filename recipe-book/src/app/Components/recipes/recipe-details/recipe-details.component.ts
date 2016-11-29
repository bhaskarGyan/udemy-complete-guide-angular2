import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../../Services/shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeServiceService} from "../../../Services/recipe-service/recipe-service.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  selectedRecipe:Recipe;
  private subscription:Subscription;
  private recipeIndex:number;
  constructor(private shoppingListService:ShoppingListService,
              private routes:ActivatedRoute,
              private recipeService:RecipeServiceService,
              private router:Router
    ) {

  }

  ngOnInit() {
    this.subscription = this.routes.params.subscribe(
      (param:any) => {
        this.recipeIndex = param['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    )
  }

  onEdit(){
    this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['recipes']);
  }

  addToShoppingList(){
    this.shoppingListService.addShoppingList(this.selectedRecipe.ingredient);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
