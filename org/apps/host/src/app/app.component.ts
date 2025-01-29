import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@org/shared';
import { initFlowbite } from 'flowbite';

@Component({
  imports: [NavBarComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'host';
}
