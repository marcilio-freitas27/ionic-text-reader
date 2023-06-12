import { Component } from '@angular/core';
import { IonTextarea, IonicModule } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { SpeechService } from '../service/speech.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  taxa!: RangeValue;
  tom!: RangeValue;
  constructor(private speechService: SpeechService) {

  }

  ngOnInit(){

  }

  speak(taxa: RangeValue, tom: RangeValue, text: IonTextarea){
    this.speechService.speak(taxa, tom, text);
  };

  stop(){
    this.speechService.stop();
  };

  taxaChange(taxa: RangeValue, event: Event){
    this.speechService.taxaChange(taxa, event);
  }

  tomChange(tom: RangeValue, event: Event){
    this.speechService.tomChange(tom, event);
  }

  clear(text: IonTextarea){
    this.speechService.clear(text);
  }

  speakStart(text: IonTextarea){
    this.speechService.speakStart(text);
  }

  speakAdd(){
    this.speechService.speakAdd();
  }

}
