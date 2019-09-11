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
  `,
  styles: []
})
export class TestComponent implements OnInit {
  title = "Some Tests...";
  displayName = true;

  constructor() { }

  ngOnInit() {
  }

}
