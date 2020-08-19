import { HeaderPage, FooterPage, FeedPage } from './app.po';

describe('app header todo list', () => {
  let page: HeaderPage;

  beforeEach(() => {
    page = new HeaderPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getMainHeading().getText()).toEqual('Hacker News');
  });

  it('should navigate to home page on app title click', () => {
    page.navigateTo();
    page.getMainHeading().click().then(function () {
      page.getBrowser().sleep(2000).then(function () {
        expect(page.getBrowser().getCurrentUrl()).toEqual(page.getHomeUrl());
      });
    });    
  });

});

describe('app footer todo list', () => {
  let page: FooterPage;

  beforeEach(() => {
    page = new FooterPage();
  });

  it('should display footer brand', () => {
    page.navigateTo();
    expect(page.getMainFooting().getText()).toEqual('Travis Armstrong 2020');
  });

  it('should navigate to home page on footer brand click', () => {
    page.navigateTo();
    page.getMainFooting().click().then(function () {
      page.getBrowser().sleep(2000).then(function () {
        expect(page.getBrowser().getCurrentUrl()).toEqual(page.getHomeUrl());
      });
    });
  });

});

describe('app article feed todo list', () => {
  let page: FeedPage;

  beforeEach(() => {
    page = new FeedPage();
  });

  it('should display new stories button text', () => {
    page.navigateTo();
    expect(page.getNewStoriesButton().getText()).toEqual('New Stories');
  });

  it('should click the new stories button', () => {
    page.navigateTo();
    page.getBrowser().sleep(2000).then(function () {
      expect(page.getNewStoriesButton().click());
    });
  });

  it('should display new stories with text and non-empty url', () => {
    page.navigateTo();
    page.getBrowser().sleep(2000).then(function () {
      page.getNewStoriesButton().click();
    });
    page.getBrowser().sleep(2000).then(function () {
      page.getAllFeedItems().then(function (articles) {
        expect(articles.length);
        for (let i = 0; i < articles.length; i++) {
          expect(articles[i].getText().length);
          expect(articles[i].getAttribute('href').length);
        }
      });
    });
  });

  it('should display top stories button text', () => {
    page.navigateTo();
    expect(page.getTopStoriesButton().getText()).toEqual('Top Stories');
  });

  it('should click the top stories button', () => {
    page.navigateTo();
    page.getBrowser().sleep(2000).then(function () {
      expect(page.getTopStoriesButton().click());
    });
  });

  it('should display top stories with text and non-empty url', () => {
    page.navigateTo();
    page.getBrowser().sleep(2000).then(function () {
      page.getTopStoriesButton().click();
    });
    page.getBrowser().sleep(2000).then(function () {
      page.getAllFeedItems().then(function (articles) {
        expect(articles.length);
        for (let i = 0; i < articles.length; i++) {
          expect(articles[i].getText().length);
          expect(articles[i].getAttribute('href').length);
        }
      });
    });
  });

  it('should display best stories button text', () => {
    page.navigateTo();
    expect(page.getBestStoriesButton().getText()).toEqual('Best Stories');
  });

  it('should click the best stories button', () => {
    page.navigateTo();
    page.getBrowser().sleep(2000).then(function () {
      expect(page.getBestStoriesButton().click());
    });
  });

  it('should display best stories with text and non-empty url', () => {
    page.navigateTo();
    page.getBrowser().sleep(2000).then(function () {
      page.getBestStoriesButton().click();
    });
    page.getBrowser().sleep(2000).then(function () {
      page.getAllFeedItems().then(function (articles) {
        expect(articles.length);
        for (let i = 0; i < articles.length; i++) {
          expect(articles[i].getText().length);
          expect(articles[i].getAttribute('href').length);
        }
      });
    });
  });

  it('should display searchbar placeholder', () => {
    page.navigateTo();
    expect(page.getSearchBarInput().getAttribute('placeholder')).toEqual('Search');
  });

  it('should type and diplay text in searchbar', () => {
    page.navigateTo();
    page.getBrowser().sleep(2000).then(function () {
      page.getSearchBarInput().sendKeys('China');
      expect(page.getSearchBarInput().getAttribute('value')).toEqual('China');
    });
  });

  it('should click the next and then previous pagination buttons', () => {
    page.navigateTo();
    page.getBrowser().sleep(2000).then(function () {
      expect(page.getPaginationPreviousButton().click());
      expect(page.getPaginationNextButton().click());
    });
  });

});
