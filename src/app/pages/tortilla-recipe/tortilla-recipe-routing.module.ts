import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TortillaRecipePage } from './tortilla-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: TortillaRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TortillaRecipePageRoutingModule {}
