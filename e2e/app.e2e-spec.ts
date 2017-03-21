import { Ng2DaMoProjectPage } from './app.po';

describe('ng2-da-mo-project App', function() {
  let page: Ng2DaMoProjectPage;

  beforeEach(() => {
    page = new Ng2DaMoProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
