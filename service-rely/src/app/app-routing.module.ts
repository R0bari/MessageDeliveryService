import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts/pages/contacts-page/contacts-page.component';
import { DeliveryServicesPageComponent } from './components/delivery-services/pages/delivery-services-page/delivery-services-page.component';
import { GreetingPageComponent } from './components/greeting-page/greeting-page.component';
import { MessagesPageComponent } from './components/messages/pages/messages-page/messages-page.component';

const routes: Routes = [
  { path: '', component: GreetingPageComponent },
  { path: 'messages', component: MessagesPageComponent },
  { path: 'services', component: DeliveryServicesPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
