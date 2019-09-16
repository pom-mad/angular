import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }
  pageTitle = 'Angular Compnent Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  username: string;
  private _customerName: string;
  @ViewChild('nameRef', {static:false}) nameElementRef: ElementRef;

  get customerName(): string{
    return this._customerName;
  }

  set customerName(value: string){
    this._customerName = value;
    if(value === 'username'){
      alert('Welcome back username');
    }
  }

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
