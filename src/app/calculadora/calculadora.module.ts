import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { CalculadoraComponent } from './calculadora.component';



@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalculadoraComponent,
      },
    ]),
    IonicModule,
  ],
})
export class CalculadoraModule { }
