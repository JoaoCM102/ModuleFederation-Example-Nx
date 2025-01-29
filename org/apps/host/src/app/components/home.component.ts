import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarService } from '@org/shared';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private service: NavBarService){}
  ngOnInit(): void {
    this.service.changeInfo("Home host")
  }
}
