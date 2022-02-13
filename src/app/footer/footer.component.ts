import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vibly-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  public subscriberEmail: string = '';

  constructor() { }

  ngOnInit(): void { }

  public subscribehandler(): void {
    if (this.subscriberEmail.match(this.emailPattern)) {
      const storedEmail = JSON.parse(localStorage.getItem("subscriberList")) || [];
      storedEmail.push(this.subscriberEmail);
      localStorage.setItem("subscriberList", JSON.stringify(storedEmail));
      this.subscriberEmail = '';
    } else {
      alert('Please enter valid emailId');
    }
  }

}
