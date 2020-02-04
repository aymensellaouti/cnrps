import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color = this.defaultColor;
  constructor() { }

  ngOnInit() {
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
  resetDefaultColor() {
    this.color = this.defaultColor;
  }
}
