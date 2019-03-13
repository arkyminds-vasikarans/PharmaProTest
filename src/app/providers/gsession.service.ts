import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GsessionService {
  public isLoggedIn = true;
  constructor() { }
}
