import { Component ,ChangeDetectorRef } from '@angular/core';
import {CommonModule} from "@angular/common"
import { TimerModel } from '../model/timer-model';
import {CountdownToEnd} from "../countdown-to-end/countdown-to-end"
@Component({
  selector: 'app-timer',
  imports: [CommonModule,CountdownToEnd],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
 public timer!: TimerModel;
constructor(private cd: ChangeDetectorRef )
{
  
    // setInterval(() => this.tick(), 1000);
}

  ngOnInit(): void {
    this.timer = new TimerModel(this.cd);
  }

 onCountdownCompleted(): void {
    alert('Time up !');
  }
   togglePause() {
      this.timer.isPaused = !this.timer.isPaused;
    this.timer.buttonLabel = this.timer.isPaused ? 'Resume' : 'Pause';
  
  }

 
}
