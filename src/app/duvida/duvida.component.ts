import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duvida',
  templateUrl: './duvida.component.html',
  styleUrls: ['./duvida.component.scss'],
})
export class DuvidaComponent  implements OnInit {
  folder: string = 'Dúvidas';

  constructor() { }

  ngOnInit() {}

}
