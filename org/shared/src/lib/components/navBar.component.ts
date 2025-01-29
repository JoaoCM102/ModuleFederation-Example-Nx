import { Component, effect, Inject, inject, OnInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api/menuitem';
import { NavBarService } from '../services/nav-bar.service';
@Component({
  selector: 'lib-nav-bar',
  imports: [CommonModule,
    MenubarModule
  ],
  templateUrl: './navBar.component.html',
  styleUrl: './navBar.component.css',
})
export class NavBarComponent {
   service = inject(NavBarService)
  items: MenuItem[] = [];



  constructor() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: ['/home'],
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: ['/app1'],
      },{
        label: 'Transferencias',
        icon: 'pi pi-send',
        routerLink: ['/app2'], 
      },{
        label: 'Mis tarjetas',
        icon: 'pi pi-credit-card',
        routerLink: ['/app3'], 
      },]
}
 
}
