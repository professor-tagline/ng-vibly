import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'vibly-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('subscribeForm') subscribeForm!: NgForm;

  public viblyGoal: string = '';

  constructor() { }

  ngOnInit(): void {  }

  /**
   * submit
   */
  public subscribehandler() {
    console.log('this.subscribeForm.valid', this.subscribeForm.valid);
    if (this.subscribeForm.valid) {
      const subscriberEmail =  this.subscribeForm.value.emailId;     
      const storedEmail = JSON.parse(localStorage.getItem("subscriberList")) || [];
      storedEmail.push(subscriberEmail);
      localStorage.setItem("subscriberList", JSON.stringify(storedEmail));
      this.subscribeForm.reset();
    } else{
      alert('Please enter valid emailId');
    }
  }

}
