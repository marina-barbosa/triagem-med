import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {

  private _sideOff = new BehaviorSubject<boolean>(false);
  public sideOff$ = this._sideOff.asObservable();

  constructor() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  onWindowResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width > 1200) {
      this._sideOff.next(false);
    }
  }

  toggleSidebar(): void {
    this._sideOff.next(!this._sideOff.value);
  }

}
