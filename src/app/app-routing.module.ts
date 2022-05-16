import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LendingComponent} from './pages/lending/lending.component';
import {DetailsComponent} from './pages/details/details.component';
import {ListComponent} from './pages/list/list.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'item-details/:id',
    data: {isIndividual: true},
    component: DetailsComponent,
  },
  {
    path: 'list/:section',
    component: ListComponent,
  },
  {
    path: '**',
    component: LendingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
