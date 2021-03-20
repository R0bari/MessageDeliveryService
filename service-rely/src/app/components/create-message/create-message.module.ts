import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateMessagePageComponent} from './pages/create-message-page/create-message-page.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CreateMessageHeaderComponent} from './components/create-message-header/create-message-header.component';
import {SharedModule} from '../shared/shared.module';
import {CreateMessageFormComponent} from './components/create-message-form/create-message-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [CreateMessagePageComponent, CreateMessageHeaderComponent, CreateMessageFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CreateMessageModule {}
