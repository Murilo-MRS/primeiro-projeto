import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  nomePortal : string;

  cursos : string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = `http://loiane.training`;
    // var servico = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }
  

}
