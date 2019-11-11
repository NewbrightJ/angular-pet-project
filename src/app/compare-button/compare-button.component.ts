import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compare-button',
  templateUrl: './compare-button.component.html',
  styleUrls: ['./compare-button.component.css']
})
export class CompareButtonComponent implements OnInit {
  @Input() name1: string;
  @Input() name2: string;

  constructor() { }

  ngOnInit() {
  }

  setNames(name1: string, name2: string) {
  	this.name1 = 'A';
  	this.name2 = 'B';
  }

}
