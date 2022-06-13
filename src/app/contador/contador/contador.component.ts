import { Component } from '@angular/core';


@Component({
    // el selector es donde arranca la aplicacion
    selector: 'app-contador',
    // este nos permite utilizar varios template
    template: `
    <h1>{{title}}</h1>

    <h3>La base es : <strong>55</strong></h3>
    <button (click)="acumular(base)">+ {{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(- base)">- {{base}}</button>
    `,

})
export class ContadorComponent {

    title: string = 'Bases de Angular';
    numero: number = 10;
    base: number = 5;
    // sumar(){
    //   this.numero +=1;
    // }
    // restar(){
    //   this.numero -=1;
    // }

    acumular(valor: number) {
        this.numero += valor;
    }

}