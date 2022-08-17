import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TortillaChipComponent } from '../components/tortilla-chip/tortilla-chip.component';
import { GazpachoChipComponent } from '../components/gazpacho-chip/gazpacho-chip.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, TortillaChipComponent, GazpachoChipComponent]
})
export class HomePageModule {}
