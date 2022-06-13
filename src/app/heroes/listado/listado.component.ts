import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  constructor() { }

  heroes : string[] = ['Spiderman', 'Hukl','Capitan America','Thor','Captana marbel'];
  heroeBorrado : string ="";
  borrarHeroe(){

   this.heroeBorrado=  this.heroes.shift() || "";

  }

}
