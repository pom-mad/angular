import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Angular Compnent Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  username: string;

  incrementCount(){
    this.count += 1;
  }

  greetUser(updatedValue){
    this.username = updatedValue;
    if(updatedValue === 'username'){
      alert('Welcome back username');
    }
  }
}
