import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-saluda-a',
  template: `Hello {{name}}
            <button (click)=confirmRead()>Hola</button>`,
  styleUrls: ['./saluda-a.component.css']
})
export class SaludaAComponent implements OnInit {
  @Input() name: string;
  @Output() readed = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  confirmRead(){
    this.readed.emit(this.name);
  }

}
