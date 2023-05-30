import { Component } from '@angular/core';
import { IonTextarea, IonicModule } from '@ionic/angular';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { RangeValue } from '@ionic/core';
import { RangeCustomEvent } from '@ionic/angular';

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
  constructor() {}

  public speak = async (text: IonTextarea) => {
    await TextToSpeech.speak({
      text: JSON.stringify(text.value),
      lang: 'pt-BR',
      rate: +(this.taxa),
      pitch: +(this.tom),
      volume: 1.0,
      category: 'ambient',
    });
  };

  public stop = async () => {
    await TextToSpeech.stop();
  };

  public taxaChange(event: Event){
    this.taxa = (event as RangeCustomEvent).detail.value;
  }

  public tomChange(event: Event){
    this.tom = (event as RangeCustomEvent).detail.value;
  }

  public clear = (text: IonTextarea) => {
    text.value = "";
  }
}
