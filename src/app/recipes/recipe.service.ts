import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Testy Schnitzel',
    'A Super-tasty Schnitzel - just awesome!',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikWmH71N-cW5_yngUk0-mFZGZoNr8omo-gA&usqp=CAU',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('Big Fat Burger',
    'What else you need to say?',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqmWLUTuWGLruwD41JuSGaMjj8w9-5JEbew&usqp=CAU',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
