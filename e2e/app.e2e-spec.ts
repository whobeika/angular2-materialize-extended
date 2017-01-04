import { Angular2MaterializeExtendedPage } from './app.po';

describe('angular2-materialize-extended App', function() {
  let page: Angular2MaterializeExtendedPage;

  beforeEach(() => {
    page = new Angular2MaterializeExtendedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
