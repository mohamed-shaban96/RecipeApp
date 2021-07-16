import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeservice: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://recipe-book-d660a-default-rtdb.firebaseio.com/recipes.json', this.recipeservice.getRecipes());
  }
}
