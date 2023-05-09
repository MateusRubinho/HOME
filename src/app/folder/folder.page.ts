import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { cadastroModel } from '../cadastro/cadastro.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  itens: cadastroModel[] = [];
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  KeycadastraModel: string = 'homeappmobile:KeyCadastro@';

  constructor(
    private navController: NavController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    const configuracaoPadraoSalva = localStorage.getItem(this.KeycadastraModel);
    if (configuracaoPadraoSalva) {
      this.itens = JSON.parse(configuracaoPadraoSalva);
    }
  }
  showCadastro() {
    this.navController.navigateForward('/cadastro');
  }
  showExcluiTudo() {
    this.itens = [];
    localStorage.removeItem(this.KeycadastraModel);
    //this.itens.splice(0);
  }
  showUtilizar(item: any) {
    const index = this.itens.findIndex((obj) => obj.id === item.id);
    this.itens[index].saldo--;
  }
  showExclui(item: any) {
    this.showExcluiTudo();
    // const index = this.itens.findIndex((obj) => obj.id === item.id);
    // this.itens.splice(index, 1);
  }
  async showOpcoes() {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      header: 'Opções',
      buttons: [
        {
          text: 'Adicionar Observação',
          icon: 'document-text-outline',
          data: {
            action: 'delete',
          },
        },
        {
          icon: 'pencil-outline',
          text: 'Alterar Descrição',
          data: {
            action: 'delete',
          },
        },
        {
          icon: 'bag-outline',
          text: 'Alterar Saldo',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}

export interface model {
  id: number;
  saldo: number;
  nome: string;
}
