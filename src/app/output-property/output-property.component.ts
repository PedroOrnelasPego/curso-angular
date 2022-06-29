import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'contador-selector',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: any = 0

  @Output() mudouValor: any = new EventEmitter()

  incremento() {
    this.valor ++
    this.mudouValor.emit({novoValor: this.valor})
  }

  decremento(){
    this.valor --
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
