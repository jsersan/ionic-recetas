import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GazpachoRecipePage } from './gazpacho-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: GazpachoRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GazpachoRecipePageRoutingModule {}
