import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RecipeListComponent} from './Components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './Components/recipes/recipe-details/recipe-details.component';
import {HeaderComponent} from './Components/header/header.component';
import {RecipesComponent} from './Components/recipes/recipes.component';
import { RecipeItemComponent } from './Components/recipes/recipe-list/recipe-item.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './Components/shopping-list/shopping-list-add.component';
import { DropDownDirective } from './Directives/drop-down.directive';
import {RecipeServiceService} from './Services/recipe-service/recipe-service.service';
import {ShoppingListService} from './Services/shopping-list/shopping-list.service';
import {routing} from './app.routing';
import { RecipeEditComponent } from './Components/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './Components/recipes/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropDownDirective,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RecipeServiceService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
