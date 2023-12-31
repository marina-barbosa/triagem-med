import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-central',
    standalone: true,
    templateUrl: './central.component.html',
    styleUrl: './central.component.css',
    imports: [FooterComponent]
})
export class CentralComponent {

}
