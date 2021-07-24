import { Component } from "@angular/core";



@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class Heroecomponent{

    nombre: string="ironman";
    edad: number=34;
    get nombrecapital():string{
        return  this.nombre.toUpperCase();
    }

    obtener():string{
        return `${this.nombre}-${this.edad}`;

    }

    cambiar():void{
             this.nombre= 'spyderma';
    }

    cambiaredad():void{
          this.edad=60;
    }

    

}