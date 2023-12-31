import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormCadCidadaoComponent } from "../form-cad-cidadao/form-cad-cidadao.component";

@Component({
    selector: 'app-central',
    standalone: true,
    templateUrl: './central.component.html',
    styleUrl: './central.component.css',
    imports: [FooterComponent, FormCadCidadaoComponent]
})
export class CentralComponent {

}
