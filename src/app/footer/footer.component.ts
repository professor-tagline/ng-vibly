import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vibly-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public viblyGoal: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
