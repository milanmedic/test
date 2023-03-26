import { Component } from '@angular/core';
import { ModalService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zadatak';

  constructor(protected modalService: ModalService) { }
}
