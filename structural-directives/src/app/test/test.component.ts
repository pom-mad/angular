import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="displayName; else elseBlock">
      {{title}}
    </h2>
    <ng-template #elseBlock>
      <h2>
        Name is Hidden
      </h2>
    </ng-template>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>
    <h2>{{"hello " + name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
    <h2>{{ person | json}}</h2>
    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>
    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency: 'GBP'}}</h2>
    <h2>{{0.25 | currency: 'GBP': 'code'}}</h2>
    <h2>{{ date }}</h2>
    <h2>{{ date | date:'short' }}</h2>
    <h2>{{ date | date:'shortDate' }}</h2>
    <h2>{{ date | date:'shortTime' }}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  title = "Some Tests...";
  displayName = true;
  color = "red";
  colors = ["red", "blue", "green", "yellow"];
  @Input('parentData') name; // that's from app.componen.html 
  @Output() childEvent = new EventEmitter();
  person = {  // created an object person to test the pipe json but you can use pipe: lowercase uppercase titlecase...
    "firstName": "John",
    "lastName": "Wick"
  }

  date = new Date;

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('hey my dude!');
  }

}
