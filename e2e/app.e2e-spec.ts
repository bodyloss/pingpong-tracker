import { PingpongTrackerPage } from './app.po';

describe('pingpong-tracker App', () => {
  let page: PingpongTrackerPage;

  beforeEach(() => {
    page = new PingpongTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
