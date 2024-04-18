import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { FoodCardComponent } from './food-card.component';

@NgModule({
  declarations: [FoodCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [FoodCardComponent],
  providers: [],
})

export class FoodCardModule {}
