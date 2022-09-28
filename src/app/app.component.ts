import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

declare var CrComLib: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'crcomliblite';

  constructor(private zone:NgZone) {}

  sub1 = '';
  sub2 = '';

  btn1Style = {'background-color' : '#AAA'};
  btn2Counter = '0';

  ngOnInit(): void {
    this.sub1 = CrComLib.subscribeState('b','1', (val:boolean) => {
      console.log("Button 1 FB Rx", val);
      
      if(val) {
        this.zone.run(() => {
          this.btn1Style = {'background-color' : 'lime'};
        })
      } else {
        this.zone.run(() => {
          this.btn1Style = {'background-color' : '#AAA'};
        })
      }
    });

    this.sub2 = CrComLib.subscribeState('s','1', (val:string) => {
      console.log("Button 2 FB Rx", val);
      
      this.zone.run(() => {
        this.btn2Counter = val;
      })
    });
  }

  ngOnDestroy(): void {
    CrComLib.unsubscribeState('b','1',this.sub1);
    CrComLib.unsubscribeState('s','1',this.sub2);
  }

  onBtnPush(button:number) {
    console.log(`Button ${button} pushed`);
    
    CrComLib.publishEvent('b',button,true);
    CrComLib.publishEvent('b',button,false);
  }
}
