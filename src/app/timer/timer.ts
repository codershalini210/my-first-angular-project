import { Component ,ChangeDetectorRef } from '@angular/core';
import {CommonModule} from "@angular/common"
@Component({
  selector: 'app-timer',
  imports: [CommonModule],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
minutes:number
seconds:number
timeLeftColor: string;
buttonLabel: string;
isPaused: boolean;
constructor(private cd: ChangeDetectorRef )
{
   this.buttonLabel = 'Start';
  this.isPaused = false;
   this.minutes = 3;
    this.seconds = 59;
  this.timeLeftColor = 'haveTime';
  setInterval(()=>this.tick(),200)
  
    // setInterval(() => this.tick(), 1000);
}
tick()
{
    setInterval(() => this.timeLeft(), 200);
     if (!this.isPaused) {
      console.log("here")
      this.buttonLabel = 'Pause';
  if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) {
   this.reset();
     }
  }
}
this.cd.detectChanges();
}

 timeLeft(): void {
    if (this.minutes >= 2) {
      this.timeLeftColor = 'haveTime';
      return;
    }
    if (this.minutes < 2 && this.minutes >= 1) {
      this.timeLeftColor = 'lessTime';
      return;
    }
    this.timeLeftColor = 'noTime';
  }
  ngOnInit(): void {
  }


   togglePause() {
    this.isPaused = !this.isPaused;
    this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
  }

   reset(): void {
    this.minutes = 3;
    this.seconds = 59;
  }
}
