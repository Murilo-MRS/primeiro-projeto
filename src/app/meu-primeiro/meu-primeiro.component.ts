import { Component } from "@angular/core";

// decorator 
@Component({
    //metadados - vai o nome da tag html q vamos usar
    selector:'meu-primeiro-component',
    template: `
    <p>Meu primeiro component com angular</p>
    `
})
export class MeuPrimeiroComponent {}