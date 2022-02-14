import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberComponent } from './subscriber.component';

describe('SubscriberComponent', () => {
  let component: SubscriberComponent;
  let fixture: ComponentFixture<SubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should display 'subscriber list' text in h5 title`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.subscriber-wrap h5')?.textContent).toBe('subscriber list');
  });

  it(`Should display subscriberList localstorage value to the td tag in dom`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    localStorage.removeItem('subscriberList');

    const emailIds = ['email@gmail.com', 'parth@gmail.com'];
    localStorage.setItem('subscriberList', JSON.stringify(emailIds));

    fixture.detectChanges();
    const data = compiled.querySelectorAll('#subscriberEmailList td');
    const localstorageEmailDetails:any = [];
    data.forEach(element => {
      localstorageEmailDetails.push(element.textContent);
    });
    expect(localstorageEmailDetails).toContain('parth@gmail.com');
  });

  it(`Table header first index should display ID as a header`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const data = compiled.querySelectorAll('.subscriber-wrap tr th');
    expect(data[0].textContent).toBe('ID');
  });
  
  it(`Table header second index should display Email as a header`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const data = compiled.querySelectorAll('.subscriber-wrap tr th');
    expect(data[1].textContent).toBe('Email');
  });
});
