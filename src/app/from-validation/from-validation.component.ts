/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
export interface AddressFormErrors {
  name: string;
  addresses: { city: string; country: string };
}
@Component({
  selector: 'app-from-validation',
  templateUrl: './from-validation.component.html',
  styleUrls: ['./from-validation.component.scss'],
})
export class FromValidationComponent implements OnInit {
  addressForm!: FormGroup;

  addressFromErrors: AddressFormErrors = {
    name: '',
    addresses: { city: '', country: '' },
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addressForm = this.formBuilder.group({
      name: [''],
      addresses: this.formBuilder.array([]),
    });
    this.addressForm.valueChanges.subscribe((_data: any) =>
      this.validateForm()
    );
  }

  validateForm() {
    for (const key in this.addressFromErrors) {
      if (Object.prototype.hasOwnProperty.call(this.addressFromErrors, key)) {
        (this.addressFromErrors as any)[key] = ''; // Type assertion here
      }

      // if (Object.prototype.hasOwnProperty.call(Object, key)) {
      //   const element = object[key];
      // }
    }
  }
  get addressesFormArray(): FormArray {
    return this.addressForm.get('addresses') as FormArray;
  }

  addAddress() {
    const addressFormGroup = this.formBuilder.group({
      city: '',
      country: '',
    });

    this.addressesFormArray.push(addressFormGroup);
  }

  removeAddress(index: number) {
    this.addressesFormArray.removeAt(index);
  }
}
