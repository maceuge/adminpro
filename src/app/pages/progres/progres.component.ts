import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styles: []
})
export class ProgresComponent implements OnInit {

  progreso = 50;

  constructor() { }

  ngOnInit() {
  }


  changeValue (val: number) {
    if (this.progreso >= 100 && val > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && val < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso += val;
  }

}
