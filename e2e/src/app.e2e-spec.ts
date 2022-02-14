import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display footer text', () => {
    page.navigateTo();
    browser.sleep(1000);
    expect(page.getFooterText().getText()).toContain('Vibly enables people to discover and attend live classes that');
  });

  it('should display Facebook social media at first index', () => {
    browser.sleep(1000);
    const li = page.getSocialLink().all(by.tagName('li')).get(0);
    const a = li.all(by.tagName('a')).get(0);
    expect(a.getAttribute('title')).toContain('Facebook');
  });

  it('should display Twitter social media at second index', () => {
    browser.sleep(1000);
    const li = page.getSocialLink().all(by.tagName('li')).get(1);
    const a = li.all(by.tagName('a')).get(0);
    expect(a.getAttribute('title')).toContain('Twitter');
  });

  it('should display Instagram social media at third index', () => {
    browser.sleep(1000);
    const li = page.getSocialLink().all(by.tagName('li')).get(2);
    const a = li.all(by.tagName('a')).get(0);
    expect(a.getAttribute('title')).toContain('Instagram');
  });

  it('should display display entered email in the subscriber email list page', () => {
    page.navigateTo();
    browser.sleep(1000);
    element(by.id('emailId')).sendKeys('parth@gmail.com');
    browser.driver.sleep(1000);
    const subscribeButtonEle = element(by.id('subscribeButton'));
    browser.driver.sleep(1000);
    subscribeButtonEle.click();
    browser.driver.sleep(2000);
    page.navigateToSubscriber();
    browser.driver.sleep(2000);

    const row = element.all(by.id('subscriberEmailList')).get(0);
    const cells = row.all(by.tagName('td'));
    expect(cells.get(1).getText()).toContain('parth@gmail.com');
  });

});
