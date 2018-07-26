import { HomePage } from './home.po';

describe('HomePage', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display homepage correctly', () => {

    page.navigateTo();

    expect(page.getH1()).toEqual('Best Efforts');
    expect(page.getFirstRowCellFontWeight()).toEqual('700');
    expect(page.getSecondRowCellFontWeight()).not.toEqual('700');
    expect(page.getRowCount()).toBe(10);
    expect(page.medalCount()).toBe(3);
    expect(page.goldMedalAltText()).toBe('Gold medal');
    expect(page.silverMedalAltText()).toBe('Silver medal');
    expect(page.bronzeMedalAltText()).toBe('Bronze medal');
  });
});
