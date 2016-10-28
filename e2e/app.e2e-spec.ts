import { NewMarvelPage } from './app.po';

describe('marvel-search App', function() {
  let page: NewMarvelPage;

  beforeEach(() => {
    page = new NewMarvelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
