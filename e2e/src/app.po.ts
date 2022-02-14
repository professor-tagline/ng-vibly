import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFooterText() {
    return element(by.css('.footer-text')).element(by.tagName('p'));
  }

  getSocialLink() {
    return element(by.css('.social-icon'));
  }

  navigateToSubscriber() {
    return browser.get('/subscriber');
}
}
