import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'contador-selector',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: any = 0

  @Output() mudouValor: any = new EventEmitter()

  @ViewChild('campoInput') campoValorInput: ElementRef | undefined

  incremento() {

    this.campoValorInput!.nativeElement.value++
    this.mudouValor.emit({novoValor: this.valor})
  }

  decremento(){
    this.campoValorInput!.nativeElement.value--
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
