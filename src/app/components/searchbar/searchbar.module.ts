import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, IonicModule],
  exports: [SearchbarComponent],
  providers: [],
})

export class SearchbarModule {}
