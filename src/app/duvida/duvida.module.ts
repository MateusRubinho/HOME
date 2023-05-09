import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { DuvidaComponent } from './duvida.component';



@NgModule({
  declarations: [DuvidaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DuvidaComponent,
      },
    ]),
    IonicModule,
  ]
})
export class DuvidaModule { }
