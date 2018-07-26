import { Pipe, PipeTransform } from '@angular/core';
import { padStart } from 'lodash';

@Pipe({
  name: 'shortTime'
})
export class ShortTimePipe implements PipeTransform {

  public transform(totalSeconds: number) {

    if (!totalSeconds) { return '0:00'; }

    let seconds = Math.floor(Math.abs(totalSeconds));
    let minutes = 0;
    let hours = 0;

    if (seconds >= 3600) {
      hours = Math.floor(seconds / 3600);
      seconds = seconds % 3600;
    }

    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    }

    let formatted =  hours ? `${hours}:${padStart(minutes.toString(), 2, '0')}:${padStart(seconds.toString(), 2, '0')}` :
           minutes ? `${minutes}:${padStart(seconds.toString(), 2, '0')}` :
           `0:${padStart(seconds.toString(), 2, '0')}`;

    if (totalSeconds < 0) { formatted = `-${formatted}`; }

    return formatted;

  }

}
