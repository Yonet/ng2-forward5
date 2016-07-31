import { Forward5AppPage } from './app.po';

describe('forward5-app App', function() {
  let page: Forward5AppPage;

  beforeEach(() => {
    page = new Forward5AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
