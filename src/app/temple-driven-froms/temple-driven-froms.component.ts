import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-temple-driven-froms',
    templateUrl: './temple-driven-froms.component.html',
    styleUrls: ['./temple-driven-froms.component.scss'],
})
export class TempleDrivenFromsComponent {
    //@ViewChild('userFrom') userForm!: NgForm;
    list: string[] = ['male', 'female'];

    user: {
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        address: {
            city: string;
            state: string;
            pincode: string;
        };
    } = {
        firstName: 'lakshmi',
        lastName: 'kanth',
        email: 'lakshmi@gmail.com',
        gender: 'male',
        address: {
            city: 'banglore',
            state: 'karnatak',
            pincode: '123',
        },
    };
    constructor() {
        console.log('const');
    }

    submitForm(userForm: NgForm) {
        console.log(userForm.value);
        //userForm.reset(); // reset form value
        // userForm.control.patchValue({
        //     address: {
        //         city: '111',
        //         state: '11',
        //         pincode: '11',
        //     },
        // }); // updated only model group data
    }

    resetFrom(userForm: NgForm) {
        userForm.resetForm();
    }
}
