import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  NavController,
} from '@ionic/angular';
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
  // public alertButtons = [
  //   {
  //     text: 'Cancel',
  //     role: 'cancel',
  //     handler: () => {},
  //   },
  //   {
  //     text: 'OK',
  //     role: 'confirm',
  //     handler: () => {
  //       this.itens = [];
  //       localStorage.removeItem(this.KeycadastraModel);
  //     },
  //   },
  // ];

  // setResult(ev: any) {
  //   this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  // }

  constructor(
    private alertController: AlertController,
    private navController: NavController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    setTimeout(() => {
      const objCadastro = localStorage.getItem(this.KeycadastraModel);
      if (objCadastro) {
        this.itens = JSON.parse(objCadastro);
        console.log(this.itens);
      }
    }, 500);
  }
  handleRefresh(event: any) {
    setTimeout(async () => {
      const objCadastro = localStorage.getItem(this.KeycadastraModel);
      if (objCadastro) {
        this.itens = JSON.parse(objCadastro);
        console.log(this.itens);
      }
      if (this.itens.length === 0) {
        const alert = await this.alertController.create({
          mode: 'ios',
          header: 'Atenção!',
          subHeader: 'Não foram encontrados itens no momento!',
          buttons: ['OK'],
        });

        await alert.present();
      }
      event.target.complete();
    }, 100);
  }

  showCadastro() {
    this.navController.navigateForward('/cadastro');
  }
  async showExcluiTudo(confirmacao?: boolean) {
    if (confirmacao === true) {
      const alert = await this.alertController.create({
        mode: 'ios',
        header: 'Atenção!',
        subHeader: 'Isto limpará todos os itens da sua base de dados!',
        buttons: [
          {
            text: 'Confirmar',
            cssClass: 'secondary',
            handler: () => {
               this.itens = [];
               localStorage.removeItem(this.KeycadastraModel);
            },
          },
          {
            text: 'Cancelar',
            cssClass: 'secondary',
            handler: () => {},
          },
        ],
      });

      await alert.present();
    }
  }

  showUtilizar(item: any) {
    const index = this.itens.findIndex((obj) => obj.id === item.id);
    this.itens[index].saldo--;
    this.itens.push();
    localStorage.setItem(this.KeycadastraModel, JSON.stringify(this.itens));
  }
  showExclui(item: any) {
   // this.showExcluiTudo(true);
   const index = this.itens.findIndex((obj) => obj.id === item.id);
   this.itens[index];
   localStorage.removeItem(this.KeycadastraModel);
   this.itens.splice(index, 1);
  }
  async showOpcoes() {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      header: 'Opções',
      buttons: [
        {
          text: 'Adicionar Observação',
          icon: 'document-text-outline',
          handler: () => {},
          // data: {
          //   action: 'delete',
          // },
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

// export interface model {
//   id: number;
//   saldo: number;
//   nome: string;
// }
