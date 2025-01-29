import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarService } from '@org/shared';

@Component({
  selector: 'app-transferencias',
  imports: [CommonModule],
  templateUrl: './transferencias.component.html',
  styleUrl: './transferencias.component.css',
})
export class TransferenciasComponent implements OnInit{
  constructor(private service: NavBarService){}
  ngOnInit(): void {
    this.service.changeInfo("Aplicacion 2")
  }
}