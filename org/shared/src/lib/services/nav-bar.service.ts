import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  info = signal<string>("");

  constructor() {
    effect(() => {
      console.log("🔄 info cambió:", this.info());
    });
  }

  changeInfo(newInfo: string): void {
    
    this.info.set(newInfo);
    console.log(this.info());
    
  }
}
