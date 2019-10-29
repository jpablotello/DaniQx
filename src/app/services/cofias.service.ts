import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CofiasService {

  private baseUri = 'assets\\img\\Cofias\\';

  public getCofias() {
    let cofias: any[] = [];
    for (let index = 1; index < 42; index++) {
      const num = (index < 10) ? '00' + index : '0' + index;
      const element = {
        img: `${this.baseUri}Cofia ${num}.jpeg`,
        descripcion: `Modelo numero ${num}`,
        precio: 200
      };
      cofias.push(element);
    }
    return cofias;
  }

  public getPrecio3x1() {
    return 450;
  }

  constructor() { }
}
