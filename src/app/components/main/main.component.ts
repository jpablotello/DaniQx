import { Component, OnInit } from '@angular/core';
import { CofiasService } from 'src/app/services/cofias.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  cofias: any[] = [];
  precioOferta;

  constructor(cofiasService: CofiasService) {
      this.cofias = cofiasService.getCofias();
      console.log('cofias : ', this.cofias);

      this.precioOferta = cofiasService.getPrecio3x1();
   }
}
