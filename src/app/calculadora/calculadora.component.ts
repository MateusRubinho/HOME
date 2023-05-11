import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  folder: string = 'Calculadora';
  visor: string;
  visor2: string;

  constructor() {
    this.visor = '';
    this.visor2 = '';
  }

  ngOnInit() {}

  resultTela(num: number) {
    this.visor = this.visor + num.toString();
  }
  soma() {
    this.visor2 = this.visor + ' + ' + this.visor;
    // let n1 = parseInt(this.visor);
    // let n2 = parseInt(this.visor);
    // console.log(n1 + n2);
    // console.log(event);
  }
  excluir() {
    this.visor = this.visor.slice(0, -1);
  }
  igual() {
    // let n1 = parseInt(this.visor);
    // let n2 = parseInt(this.visor);
    // const resultado = n1 + n2;
    // console.log(n1 + n2);
    // this.visor = resultado.toString();
  }

  limparTudo() {
    this.visor = '';
    this.visor2 = '';
  }
}
