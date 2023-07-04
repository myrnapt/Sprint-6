import { Component } from '@angular/core';
import { story } from './home.component.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  // ESTO SE LO PASAMOS A ESCENA
  public Story: story[] = [
    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes",
    "L'heroi va decidir travessar la porta que el portava a casa",
    "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
  ];
  
   startAdventure: boolean = false
   hideHome: boolean = true
 
  startButton() {
    this.startAdventure = true
    this.hideHome = false
  }
}
