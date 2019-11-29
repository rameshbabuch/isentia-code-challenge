import { AppPage } from './app.po';

describe('test-ng8 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display feeds message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Feeds');
  });
});
