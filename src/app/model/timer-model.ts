import {ChangeDetectorRef} from "@angular/core"
export class TimerModel {
minutes:number
seconds:number
timeLeftColor: string;
buttonLabel: string;
isPaused: boolean;
constructor(private cd : ChangeDetectorRef)
{
   this.buttonLabel = 'Start';
  this.isPaused = false;
   this.minutes = 3;
    this.seconds = 59;
  this.timeLeftColor = 'haveTime';
  setInterval(()=>this.tick(),500)  
    // setInterval(() => this.tick(), 1000);
}
tick()
{
    setInterval(() => this.timeLeft(), 500);
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


   togglePause() {
    this.isPaused = !this.isPaused;
    this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
  }

   reset(): void {
    this.minutes = 3;
    this.seconds = 59;
  }
}
