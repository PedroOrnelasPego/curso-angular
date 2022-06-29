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

  valorAtual: string = ''

  valorSalvo: string = ''

  isMouseOver: boolean = false

  nome: string = 'abc'

  pessoa: any = {
    nome: 'Pedro',
    idade: 20
  }

  getValor(){
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!')
  }

  digitou(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value)

  }

  salvarValor(valor: any){
    this.valorSalvo = ((<HTMLInputElement>valor.target).value)

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
