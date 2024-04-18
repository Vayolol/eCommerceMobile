import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item.component';


@NgModule({
  declarations: [CategoryItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [CategoryItemComponent],
  providers: [],
})

export class CategoryItemModule {}
