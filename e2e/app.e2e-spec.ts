import { HerosAngularCliPage } from './app.po';

describe('heros-angular-cli App', () => {
  let page: HerosAngularCliPage;

  beforeEach(() => {
    page = new HerosAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
