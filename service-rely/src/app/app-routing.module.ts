import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryServicesTableComponent } from './components/delivery-services/components/delivery-services-table/delivery-services-table.component';
import { GreetingPageComponent } from './components/greeting-page/greeting-page.component';
import { MessagesPageComponent } from './components/messages/messages-page/messages-page.component';

const routes: Routes = [
  { path: '', component: GreetingPageComponent },
  { path: 'messages', component: MessagesPageComponent },
  { path: 'services', component: DeliveryServicesTableComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
