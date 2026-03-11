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
constructor(private cd: ChangeDetectorRef )
{
  this.minutes =1
  this.seconds=59
  setInterval(()=>this.tick(),1000)
}
tick()
{
   
  if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) {
        this.minutes = 1;
        this.seconds = 59;
      }
   
  }
this.cd.detectChanges();
}
}
