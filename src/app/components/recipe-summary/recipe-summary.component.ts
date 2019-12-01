import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../model/Recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent {

@Input()
recipe: Recipe;

  constructor() { }

}
