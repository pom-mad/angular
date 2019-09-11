import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
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
  `,
  styles: []
})
export class TestComponent implements OnInit {
  title = "Some Tests...";
  displayName = true;
  color = "red";
  colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

}
