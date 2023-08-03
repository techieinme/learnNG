import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss'],
})
export class ReactiveFromComponent {
  userFrom!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userFrom = this.fb.group({
      firstName: [],
      lastName: ['', [Validators.required, Validators.maxLength(4)]],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      isMarried: ['', Validators.required],
      country: ['', Validators.required],
    });
    // this.userFrom = new FormGroup({
    //   firstName: new FormControl('asd'),
    //   lastName: new FormControl('', [
    //     Validators.required,
    //     Validators.maxLength(4),
    //   ]),
    //   email: new FormControl(),
    //   gender: new FormControl(),
    //   isMarried: new FormControl(),
    //   country: new FormControl(),
    // });

    this.userFrom.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

  onSubmit(userFrom: FormGroup) {
    console.log(userFrom.value);
  }
}
