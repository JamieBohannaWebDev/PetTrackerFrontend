import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddNewComponent} from './add-new/add-new.component';
import {RemoveComponent} from './remove/remove.component';
import {UpdateComponent} from './update/update.component';

const routes: Routes = [
  // Basic routes
  {path: '', pathMatch: 'full', component: DashboardComponent},
  {path: 'add', pathMatch: 'full', component: AddNewComponent},
  {path: 'remove', pathMatch: 'full', component: RemoveComponent},
  {path: 'update', pathMatch: 'full', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
