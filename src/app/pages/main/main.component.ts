import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CentralComponent } from "../../components/central/central.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [NavbarComponent, CentralComponent, FooterComponent]
})
export class MainComponent {

}
