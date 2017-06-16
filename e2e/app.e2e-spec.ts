import { WikiSearchPage } from './app.po';

describe('wiki-search App', () => {
  let page: WikiSearchPage;

  beforeEach(() => {
    page = new WikiSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
