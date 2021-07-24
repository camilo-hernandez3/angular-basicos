import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  heroes:string []=['spyderman', 'ironman', 'tor', 'hulk'];
   borr:string="";
  
  
  
  
  borrarheroe(){
    this.borr=this.heroes.shift() || '';
    


  }

 

}
