import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // const fixture = TestBed.createComponent(FooterComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`footer title should be mockFooterGoalTitle`, () => {
    const mockFooterGoalTitle: string = ' Vibly enables people to discover and attend live classes that fit their needs and goals in a wide range of categories. We aim to empower experts all over the world to share their skills, reach customers globally, and make money along the way. ';
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer-text p')?.textContent).toBe(mockFooterGoalTitle);
  });

  it(`footer letter title should be mockFooterLetterTitle`, () => {
    const mockFooterLetterTitle: string = 'Subscribe to our newsletter';
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.letter-title')?.textContent).toBe(mockFooterLetterTitle);
  });

  it(`footer copyrights text should be mockFooterCopyrightsText`, () => {
    const mockFooterCopyrightsText: string = ' @ 2021 vibly.io. Privacy Policy and Terms and Conditions. All rights reserved. ';
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.copyrights-text')?.textContent).toBe(mockFooterCopyrightsText);
  });

  it(`footer termsAndConditions id tag value should be mockFooterTermsAndCondition`, () => {
    const mockFooterTermsAndCondition: string = 'Terms & Conditions';
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#termsAndConditions')?.textContent).toBe(mockFooterTermsAndCondition);
  });

  it(`footer privacyPolicy id tag value should be mockFooterPrivacyPolicy`, () => {
    const mockFooterPrivacyPolicy: string = 'Privacy Policy';
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#privacyPolicy')?.textContent).toBe(mockFooterPrivacyPolicy);
  });

  it('subscriber email should stored in localstorage after called subscribehandler method=', () => {
    localStorage.removeItem("subscriberList");
    const app = fixture.componentInstance;
    app.subscriberEmail = 'parth@gmail.com';
    app.subscribehandler();
    expect(JSON.parse(localStorage.getItem("subscriberList"))[0]).toBe('parth@gmail.com');
  });

});
