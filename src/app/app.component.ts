import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  myDate = Date.now();
  
  mediaSub!: Subscription;
  constructor(public mediaObserver:MediaObserver){}
  ngOnInit(){
  }
  ngOnDestroy(){}

}

