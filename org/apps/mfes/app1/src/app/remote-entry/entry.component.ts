import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarService } from '@org/shared';

@Component({
  imports: [CommonModule,RouterModule],
  selector: 'app-app1-entry',
  template: `<body>
  <router-outlet></router-outlet>
</body>`,
})
export class RemoteEntryComponent implements OnInit{
  constructor(private service: NavBarService){}
  ngOnInit(): void {
    this.service.changeInfo("Aplicacion 1")
  }
}