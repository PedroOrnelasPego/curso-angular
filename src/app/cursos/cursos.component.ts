import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: any

  //cursos: string[] = ['Java', 'Ext JS', 'Angular']
  cursos: string[]

  constructor() {

    this.nomePortal = 'http://pedro.com'
    this.cursos = ['Java', 'Ext JS','Angular']

   /* for (let i=0; i<this.cursos.length; i++) {
      let curso =this.cursos[i];
    } mesma logica apresentada no html*/

  }

  ngOnInit(): void {
  }

}
