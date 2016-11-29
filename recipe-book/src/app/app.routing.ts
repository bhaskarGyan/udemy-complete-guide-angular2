/**
 * Created by Bhaskar on 27/11/16.
 */
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from "./Components/recipes/recipes.component";
import {ShoppingListComponent} from "./Components/shopping-list/shopping-list.component";
import {RECIPE_ROUTE} from "./Components/recipes/recipe.route";

const APP_ROUTE:Routes = [
  {path:'',redirectTo:'recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,children:RECIPE_ROUTE},
  {path:'shoppingList',component:ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTE);
