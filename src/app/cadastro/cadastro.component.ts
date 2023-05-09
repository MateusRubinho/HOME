import { Component, OnInit } from '@angular/core';
import { cadastroModel } from './cadastro.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  public folder: string = 'Cadastro';
  KeycadastraModel: string = 'homeappmobile:KeyCadastro@';
  itens: cadastroModel[] = [];
  objcadastraModel: cadastroModel;
  proximoID: number = 1;
  isToastOpen = false;

  constructor() {
    this.objcadastraModel = {
      id: this.proximoID++,
      descricao: '',
      saldo: '',
      data: '',
    };
  }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  onDateInput(event: any) {
    const valor = event.target.value; // aqui você obtém o valor do input
    this.objcadastraModel.data = valor;
  }
  salvar() {
    // if (!localStorage.getItem(this.KeycadastraModel)) {
    //   localStorage.setItem(this.KeycadastraModel, JSON.stringify([]));    }
    let novoObjeto: cadastroModel = {
      id: this.proximoID++,
      descricao: this.objcadastraModel.descricao,
      saldo: this.objcadastraModel.saldo,
      data: this.objcadastraModel.data,
    };
    // let itens = JSON.parse(localStorage.getItem(this.KeycadastraModel) || '[]') ;
    // itens.push(novoObjeto);
    // localStorage.setItem(this.KeycadastraModel, JSON.stringify(itens));
    let itens = JSON.parse(localStorage.getItem(this.KeycadastraModel) || '[]');
    if (!Array.isArray(itens)) {
      itens = [];
    }
    itens.push(novoObjeto);
    localStorage.setItem(this.KeycadastraModel, JSON.stringify(itens));
  }
}
