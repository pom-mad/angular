import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    registrationForm = new FormGroup({
      username: new FormControl('mad'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl('')
      })
    });

    loadApiData(){        //patchValue is for a part of the form like only username and password
      this.registrationForm.setValue({
        username: 'bruce',
        password: 'test',
        confirmPassword: 'test',
        address: {
          city: 'City',
          state: 'State',
          postalCode: '123123'
        }
      });
    }
}
