import { Component,Input,EventEmitter,Output,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-countdown-to-end',
  imports: [],
  templateUrl: './countdown-to-end.html',
  styleUrl: './countdown-to-end.css',
})
export class CountdownToEnd {
//  seconds: number = 25;
 @Input() seconds!: number; 
   @Output() completed: EventEmitter<any> = new EventEmitter();
intervalId: any;
  constructor(private cd:ChangeDetectorRef) {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }
  private tick(): void {

    if (--this.seconds < 1) {
      clearInterval(this.intervalId);
      this.completed.emit(null)
    }
    this.cd.detectChanges()
  }
}
