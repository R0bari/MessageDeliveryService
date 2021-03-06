import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryServicesPageComponent } from './components/delivery-services/pages/delivery-services-page/delivery-services-page.component';
import { GreetingPageComponent } from './components/greeting-page/greeting-page.component';
import { MessagesPageComponent } from './components/messages/messages-page/messages-page.component';

const routes: Routes = [
  { path: '', component: GreetingPageComponent },
  { path: 'messages', component: MessagesPageComponent },
  { path: 'services', component: DeliveryServicesPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
