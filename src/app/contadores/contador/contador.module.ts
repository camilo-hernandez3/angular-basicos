import { CommonModule } from '@angular/common';
import  { NgModule } from '@angular/core';
import { contadorcomponent } from './contador.component';




@NgModule({
    declarations:[
        contadorcomponent
       
    ],
    exports:[
        contadorcomponent
      
    ],
    imports:[
        
    ]
})
export class contadormodule{

}