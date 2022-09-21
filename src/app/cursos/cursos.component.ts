import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  nomePortal : string;

  cursos : string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() {
    this.nomePortal = `http://loiane.training`;
  }


}
