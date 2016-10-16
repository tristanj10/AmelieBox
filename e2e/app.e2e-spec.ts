import { AmelieBoxPage } from './app.po';

describe('amelie-box App', function() {
  let page: AmelieBoxPage;

  beforeEach(() => {
    page = new AmelieBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
