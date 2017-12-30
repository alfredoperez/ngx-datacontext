import { NgxDatacontextDemoPage } from './app.po';

describe('ngx-datacontext-demo App', () => {
  let page: NgxDatacontextDemoPage;

  beforeEach(() => {
    page = new NgxDatacontextDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
