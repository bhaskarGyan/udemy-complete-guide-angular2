import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeServiceService} from '../../../Services/recipe-service/recipe-service.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [];

  constructor(private recipeService: RecipeServiceService) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
