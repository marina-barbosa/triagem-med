import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarServiceService } from '../../services/sidebar-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @HostBinding('class.hideside') sideOff: boolean = true;
  @HostBinding('style.display') display: string = '';

  constructor(sidebarService: SidebarServiceService) {
    sidebarService.sideOff$.subscribe((sideOff) => {
      if (sideOff) {
        this.sideOff = sideOff;
        setTimeout(() => {
          this.display = this.sideOff ? 'none' : '';
        }, 400);
      } else {
        this.display = this.sideOff ? 'block' : '';
        setTimeout(() => {
          this.sideOff = sideOff;
        }, 1);
      }

    });
  }
}














