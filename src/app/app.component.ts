import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio ', icon: 'home' },
    { title: 'Cadastrar Item', url: 'cadastro', icon: 'add' },
    { title: 'Dúvidas', url: 'duvida', icon: 'warning' },
    { title: 'Sair', url: '/folder/Sair', icon: 'exit' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
