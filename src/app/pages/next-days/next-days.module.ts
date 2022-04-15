import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextDaysPageRoutingModule } from './next-days-routing.module';

import { NextDaysPage } from './next-days.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextDaysPageRoutingModule
  ],
  declarations: [NextDaysPage]
})
export class NextDaysPageModule {}
