import { Angular2CalculatorPage } from './app.po';

describe('angular2-calculator App', function() {
  let page: Angular2CalculatorPage;

  beforeEach(() => {
    page = new Angular2CalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
