/*
* File: app.component.ts
* Author: Katonás Péter
* Copyright: 2024, Katonás Péter
* Group: SZOFT II/2/E
* Date: 2024-12-07
* Github: https://github.com/DanteTheBeta/hengfel.git
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { HengfelComponent } from './hengfel/hengfel.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [HengfelComponent], 
  template: `
    <app-hengfel></app-hengfel>
  `
})
export class AppComponent {}
