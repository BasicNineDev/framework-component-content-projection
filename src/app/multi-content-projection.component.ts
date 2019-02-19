import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-content-projection',
  template: `
    <h3>Multi-content-projection</h3>
    
    <ng-content select="header"></ng-content>
    <ng-content select="section"></ng-content>
    <ng-content select=".my-class"></ng-content>
    <ng-content select="footer"></ng-content>
  `,
  styles: []
})
export class MultiContentProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
