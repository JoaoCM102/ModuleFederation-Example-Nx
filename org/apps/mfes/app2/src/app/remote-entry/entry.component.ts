import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { NavBarService } from '@org/shared';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-app2-entry',
  template: `<body>
    <router-outlet></router-outlet>
  </body>`,
})
export class RemoteEntryComponent implements OnInit{
  constructor(private service: NavBarService){}
  ngOnInit(): void {
    this.service.changeInfo("Aplicacion 2")
  }
}