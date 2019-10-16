import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent {

  @Input() pedido;

  constructor() { }

}
