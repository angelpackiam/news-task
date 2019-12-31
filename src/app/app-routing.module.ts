import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsApiComponent } from './news-api/news-api.component';

const routes: Routes = [{
  path: '',
  component: NewsApiComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
