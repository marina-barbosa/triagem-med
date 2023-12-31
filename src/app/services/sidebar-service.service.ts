import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {

  private _sideOff = new BehaviorSubject<boolean>(false);
  public sideOff$ = this._sideOff.asObservable();

  constructor() { }

  toggleSidebar(): void {
    this._sideOff.next(!this._sideOff.value);
  }
}
