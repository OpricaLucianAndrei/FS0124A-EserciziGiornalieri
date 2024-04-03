import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { User } from '../../interface/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  userForm!: FormGroup;
  user!: User;
  genders = ['Men', 'Women'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.userForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        surname: ['', [Validators.required, Validators.minLength(3)]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        gender: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });

    this.userForm.valueChanges.subscribe((status) => {
      console.log('Stato del form: ', status);
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }

  getErrorsC(name: string, error: string) {
    return this.userForm.get(name)?.errors![error];
  }

  getFormC(name: string) {
    return this.userForm.get(name);
  }
  submit() {
    this.user = this.userForm.value;
    console.log('Oggetto user: ', this.user);
    console.log('Form correttamente inviato');
    this.userForm.reset();
  }
}
