import { SanoopWebsitePage } from './app.po';

describe('sanoop-website App', () => {
  let page: SanoopWebsitePage;

  beforeEach(() => {
    page = new SanoopWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
