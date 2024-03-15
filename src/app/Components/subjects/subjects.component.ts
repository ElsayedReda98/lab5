import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit {
  subject:Subject<number> = new Subject<number>();
  behavior: BehaviorSubject<string> = new BehaviorSubject<string>('sayed behavior initial');
  observable!:Observable<number>;

  ngOnInit(): void {
    this.subject.subscribe({
      next:(data)=>{
        console.log(`s 1 r data: ${data}`);
      },
      error:(error)=>{
        console.log(`s 1 r error: ${error}`);
      },
      complete:()=>{
        console.log(`s 1 r completed`);
      }
    });

    this.subject.subscribe({
      next:(data)=>{
        console.log(`s 2 r data: ${data}`);
      },
      error:(error)=>{
        console.log(`s 2 r error: ${error}`);
      },
      complete:()=>{
        console.log(`s 2 r completed`);
      }
    });

    this.subject.next(1)
    this.subject.next(22)
    this.subject.next(3)
    this.subject.error('my error');

    ////////////////////////////////////////////
    this.observable = new Observable<number>((o )=> {
      o.next(5);
      o.next(6);
      o.next(7);
      o.error('obs error');
    });  

    this.observable.subscribe({
      next:(data)=>{
        console.log(`obs 1 r data: ${data}`);
      },
      error:(error)=>{
        console.log(`obs 1 r error: ${error}`);
      },
      complete:()=>{
        console.log(`obs 1 r completed`);
      }
    });

    this.observable.subscribe({
      next:(data)=>{
        console.log(`obs 2 r data: ${data}`);
      },
      error:(error)=>{
        console.log(`obs 2 r error: ${error}`);
      },
      complete:()=>{
        console.log(`obs 2 r completed`);
      }
    });

    this.behavior.subscribe((data ) => {
      console.log(data)
    })
    
  }


}
