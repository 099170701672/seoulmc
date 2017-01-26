import { SeoulmcPage } from './app.po';

describe('seoulmc App', function() {
  let page: SeoulmcPage;

  beforeEach(() => {
    page = new SeoulmcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
