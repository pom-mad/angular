import { RegistrationService } from './registration.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registrationForm: FormGroup;

  get username(){
    return this.registrationForm.get('username');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, {validator: PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue =>{
        const email = this.registrationForm.get('email');
        if(checkedValue){
          email.setValidators(Validators.required);
        }else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  // registrationForm = new FormGroup({
  //   username: new FormControl('mad'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadApiData(){        //setValue is for full form like only username and password
    this.registrationForm.patchValue({
      username: 'bruce',
      email: 'bruce@mail.com',
      subscribe: true,
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123123'
      }
    });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value).subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }

}
