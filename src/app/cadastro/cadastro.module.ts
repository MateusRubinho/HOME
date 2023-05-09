import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroComponent],
  //exports:[CadastroComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CadastroComponent,
      },
    ]),
    IonicModule,
  ],
})
export class CadastroModule { }
