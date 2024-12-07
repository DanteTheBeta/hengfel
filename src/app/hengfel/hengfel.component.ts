/*
* File: hengfel.component.ts
* Author: Katonás Péter
* Copyright: 2024, Katonás Péter
* Group: SZOFT II/2/E
* Date: 2024-12-07
* Github: https://github.com/DanteTheBeta/hengfel.git
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-hengfel',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './hengfel.component.html',
  styleUrls: ['./hengfel.component.css']
})
export class HengfelComponent {
  radius: number = 0;
  height: number = 0;
  surface: number | null = null;

  calculateSurface(): void {
    if (this.radius > 0 && this.height > 0) {
        this.surface = 2 * Math.PI * this.radius * (this.radius + this.height);
    }
  }
}