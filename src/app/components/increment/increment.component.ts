import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @Input() leyenda: string = 'Leyenda'; 
  @Input() progreso: number;
  
  @Output() changeVal: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {}
  ngOnInit() {}

  onChanges (newValue: number) {

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.txtProgress.nativeElement.focus();
    this.changeVal.emit(this.progreso);
  }

  changeValue (val: number) {
    if (this.progreso >= 100 && val > 0) {
      this.progreso = 100;
      this.changeVal.emit(this.progreso);
      return;
    }
    if (this.progreso <= 0 && val < 0) {
      this.progreso = 0;
      this.changeVal.emit(this.progreso);
      return;
    }
    this.progreso += val;
    this.changeVal.emit(this.progreso);
  }

}
