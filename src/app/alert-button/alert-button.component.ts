import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.sass']
})
export class AlertButtonComponent implements OnInit {
  content = 'You have been warned';
  hideContent = true;
  severity = 423;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideContent = !this.hideContent;
  }
}
