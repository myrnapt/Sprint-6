import { Component, ViewEncapsulation } from '@angular/core';
import { story } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // ESTO SE LO PASAMOS A ESCENA
  public Story: story[] = [
    {
      txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      img: './assets/1.jpg',
    },
    {
      txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes",
      img: './assets/2.jpg',
    },
    {
      txt: "L'heroi va decidir travessar la porta que el portava a casa",
      img: './assets/3.jpg',
    },
    {
      txt: 'Mentrestant, altres heroes no van tenir tanta sort en la seva elecció...',
      img: './assets/4.jpg',
    },
  ];

  startAdventure: boolean = false;
  hideHome: boolean = true;

  startButton() {
    this.startAdventure = true;
    this.hideHome = false;
  }
}
