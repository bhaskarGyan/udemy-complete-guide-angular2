import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Tandoori chicken','Chicken','http://i.dawn.com/large/2015/08/55cb2e197291b.jpg',[]),
    new Recipe('Matar paneer','Panner','https://i.ytimg.com/vi/ho0YmlOz3N0/maxresdefault.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();


  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
