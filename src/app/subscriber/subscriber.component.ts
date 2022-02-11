import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vibly-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {

  public subscriberList = [];
  constructor() { 
    this.subscriberList = JSON.parse(localStorage.getItem("subscriberList")) || [];
  }

  ngOnInit(): void {
  }

}
