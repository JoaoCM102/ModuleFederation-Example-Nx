import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarService } from '@org/shared';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit{
  constructor(private service: NavBarService){}
  ngOnInit(): void {
    this.service.changeInfo("Aplicacion 1")
  }
}