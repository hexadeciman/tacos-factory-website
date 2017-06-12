import { TACOSPage } from './app.po';

describe('tacos App', () => {
  let page: TACOSPage;

  beforeEach(() => {
    page = new TACOSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
