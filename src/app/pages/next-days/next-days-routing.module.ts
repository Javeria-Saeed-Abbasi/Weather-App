import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextDaysPage } from './next-days.page';

const routes: Routes = [
  {
    path: '',
    component: NextDaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextDaysPageRoutingModule {}
