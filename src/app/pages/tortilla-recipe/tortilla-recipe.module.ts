import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TortillaRecipePageRoutingModule } from './tortilla-recipe-routing.module';

import { TortillaRecipePage } from './tortilla-recipe.page';
import { TortillaChipComponent } from 'src/app/components/tortilla-chip/tortilla-chip.component';
import { TortillaIngredientsComponent } from 'src/app/components/tortilla-ingredients/tortilla-ingredients.component';
import { TortillaHowtoComponent } from 'src/app/components/tortilla-howto/tortilla-howto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TortillaRecipePageRoutingModule
  ],
  declarations: [
    TortillaRecipePage,
    TortillaChipComponent,
    TortillaIngredientsComponent,
    TortillaHowtoComponent
  ]
})
export class TortillaRecipePageModule {}
