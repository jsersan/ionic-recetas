import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GazpachoRecipePageRoutingModule } from './gazpacho-recipe-routing.module';

import { GazpachoRecipePage } from './gazpacho-recipe.page';
import { GazpachoChipComponent } from 'src/app/components/gazpacho-chip/gazpacho-chip.component';
import { GazpachoIngredientsComponent } from 'src/app/components/gazpacho-ingredients/gazpacho-ingredients.component';
import { GazpachoHowtoComponent } from 'src/app/components/gazpacho-howto/gazpacho-howto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GazpachoRecipePageRoutingModule
  ],
  declarations: [
    GazpachoRecipePage,
    GazpachoChipComponent,
    GazpachoIngredientsComponent,
    GazpachoHowtoComponent
  ]
})
export class GazpachoRecipePageModule {}
