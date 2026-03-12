import { Component  } from '@angular/core';
import {CommonModule} from "@angular/common"
import { TimerModel } from '../model/timer-model';
@Component({
  selector: 'app-timer',
  imports: [CommonModule],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
 public timer!: TimerModel;
constructor()
{
  
    // setInterval(() => this.tick(), 1000);
}

  ngOnInit(): void {
    this.timer = new TimerModel();
  }


   togglePause() {
      this.timer.isPaused = !this.timer.isPaused;
    this.timer.buttonLabel = this.timer.isPaused ? 'Resume' : 'Pause';
  
  }

 
}
