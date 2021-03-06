import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('Banana Bread',
        'This is my favourite banana bread recipe! My mother taught me how to make this one warm summer afternoon',
        null, null, null),
      new Recipe('Homstead Tofu',
        'This is a dish from rural Hunan province in China and has tofu, some flavouring, and lots of chili peppers',
        null, null, null),
    ];
  }
}
