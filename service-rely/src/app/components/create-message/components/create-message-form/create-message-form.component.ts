import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from 'src/app/components/delivery-services/models/DeliveryService';
import { DeliveryServicesService } from 'src/app/components/delivery-services/services/delivery-services.service';
import { CreateMessageService } from '../../services/create-message.service';

@Component({
  selector: 'app-create-message-form',
  templateUrl: './create-message-form.component.html',
  styleUrls: ['./create-message-form.component.scss']
})
export class CreateMessageFormComponent implements OnInit {
  form: FormGroup;
  deliveryServices: DeliveryService[] = [];
  chosenDeliveryService: any;

  constructor(private formBuilder: FormBuilder,
              private deliveryServicesService: DeliveryServicesService,
              private createMessageService: CreateMessageService) { }

  ngOnInit(): void {
    this.form = this.createForm();
    this.deliveryServicesService.getDeliveryServices()
      .subscribe((data: DeliveryService[]) => this.deliveryServices = data);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.checkForm();
    }
    else {
      alert("Не все поля заполнены корректно");
    }
    console.log(this.form.value);
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      destinationEmail: [null, Validators.required],
      theme: [null],
      body: [null],
      htmlEnabled: [null],
      chosenDeliveryService: [null]
    });
  }

  private checkForm(): void {
    if (!this.form.value['theme']) {
      this.form.get('theme').setValue('Без темы');
    }
    if (!this.form.value['body']) {
      this.form.get('body').setValue('Без текста');
    }
    if (!this.form.value['htmlEnabled']) {
      this.form.get('htmlEnabled').setValue(false);
    }
    if (!this.form.value["chosenDeliveryService"]) {
      this.form.get('chosenDeliveryService').setValue(this.deliveryServices[0].deliveryServiceId);
    }
  }

}
