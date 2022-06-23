import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: any

  //cursos: string[] = ['Java', 'Ext JS', 'Angular']
  cursos: string[];

  constructor(private CursosService: CursosService) {

    this.nomePortal = 'http://pedro.com'
    this.cursos = this.CursosService.getCursos()

   // var servico = new CursosService();




    //this.cursos = ['Java', 'Ext JS','Angular']
   /* for (let i=0; i<this.cursos.length; i++) {
      let curso =this.cursos[i];
    } mesma logica apresentada no html*/

  }

  ngOnInit(): void {
  }

}
