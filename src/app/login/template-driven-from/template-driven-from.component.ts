import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.scss']
})
export class TemplateDrivenFromComponent {

  user = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission, e.g., send data to the server
      console.log('Form submitted:', this.user);
    }
  }
}
