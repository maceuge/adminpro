import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styles: []
})
export class ProgresComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 35;

  constructor() { }

  ngOnInit() {
  }
  

}
