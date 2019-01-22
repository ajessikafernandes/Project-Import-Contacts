import { MyfirstprogramPage } from './app.po';

describe('myfirstprogram App', () => {
  let page: MyfirstprogramPage;

  beforeEach(() => {
    page = new MyfirstprogramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
