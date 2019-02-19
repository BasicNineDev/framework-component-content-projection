import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'single-content-projection',
  template: `
    <h3>Single-slot content projection</h3>
    <div>
      <!-- 부모 컴포넌트가 지정한 컨텐츠와 치환된다.-->
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class SingleContentProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
