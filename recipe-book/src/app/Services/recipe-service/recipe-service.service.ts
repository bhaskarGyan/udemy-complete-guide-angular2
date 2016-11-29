import { Injectable } from '@angular/core';
import {Recipe} from '../../Components/recipes/recipe';
import {Ingredient} from "../../shared/ingredient";

@Injectable()
export class RecipeServiceService {
  private recipes: Recipe [] = [
    new Recipe('Tandoori chicken', 'Chicken', 'http://i.dawn.com/large/2015/08/55cb2e197291b.jpg', [
      new Ingredient('chicken',1),
      new Ingredient('tandoor',1)
    ]),
    new Recipe('Matar paneer', 'Panner', 'https://i.ytimg.com/vi/ho0YmlOz3N0/maxresdefault.jpg', [])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
}
