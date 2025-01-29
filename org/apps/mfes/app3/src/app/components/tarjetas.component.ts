import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarService } from '@org/shared';

@Component({
  selector: 'app-tarjetas',
  imports: [CommonModule],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css',
})
export class TarjetasComponent implements OnInit{
  constructor(private service: NavBarService){}
  ngOnInit(): void {
    this.service.changeInfo("Aplicacion 3")
  }
}