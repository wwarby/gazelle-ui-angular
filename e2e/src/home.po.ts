import { browser, by, element } from 'protractor';

export class HomePage {

  public async navigateTo() {
    return browser.get('/');
  }

  public async getH1() {
    return element(by.css('app-root h1')).getText();
  }

  public async getFirstRowCellFontWeight() {
    return element(by.css('app-best-efforts table tbody tr:first-child td:nth-child(2)')).getCssValue('font-weight');
  }

  public async getSecondRowCellFontWeight() {
    return element(by.css('app-best-efforts table tbody tr:nth-child(2) td:nth-child(2)')).getCssValue('font-weight');
  }

  public async getRowCount() {
    return element.all(by.css('app-best-efforts table tbody tr')).count();
  }

  public async goldMedalAltText() {
    return element(by.css('app-best-efforts table tbody tr:first-child td:first-child img')).getAttribute('alt');
  }

  public async silverMedalAltText() {
    return element(by.css('app-best-efforts table tbody tr:nth-child(2) td:first-child img')).getAttribute('alt');
  }

  public async bronzeMedalAltText() {
    return element(by.css('app-best-efforts table tbody tr:nth-child(3) td:first-child img')).getAttribute('alt');
  }

  public async medalCount() {
    return element.all(by.css('app-best-efforts table tbody tr td:first-child img')).count();
  }

}
