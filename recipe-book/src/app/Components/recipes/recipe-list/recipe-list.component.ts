import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy','Dummy','http://thumbs3.ebaystatic.com/d/l225/m/mL6A12Ltbbdgn_1tF0HVE8A.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
