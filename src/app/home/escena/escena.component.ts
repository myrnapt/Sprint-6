import { story } from './../home.component.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  
  @Input()  // recibimos de HOME
  public Story: story[] = [
    [''] 
  ];

  currentSentence= 0
  
  buttonPrev() {
    if (this.currentSentence > 0){
      this.currentSentence--;
    }
  }
  
  buttonNext() {
    if (this.currentSentence < this.Story.length -1){
      this.currentSentence++;
      }
  }
}
