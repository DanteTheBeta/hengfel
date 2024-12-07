/*
* File: app.config.ts
* Author: Katonás Péter
* Copyright: 2024, Katonás Péter
* Group: SZOFT II/2/E
* Date: 2024-12-07
* Github: https://github.com/DanteTheBeta/hengfel.git
* Licenc: GNU GPL
*/

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    FormsModule, 
    CommonModule, 
  ]
};
