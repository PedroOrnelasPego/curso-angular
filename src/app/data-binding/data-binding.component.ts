import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://pedro.com'
  urlImagem:any = 'https://picsum.photos/400/200'

  cursoAngular: boolean = true

  getValor(){
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
