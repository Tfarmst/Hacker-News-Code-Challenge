import { browser, by, element } from 'protractor';

export class HeaderPage {

  navigateTo() {
    return browser.get('/');
  }

  getHomeUrl() {
    return 'http://localhost:4200/';
  }

  getBrowser() {
    return browser;
  }

  getMainHeading() {
    return element(by.css('app-header a.navbar-brand'));
  }
}

export class FooterPage {

  navigateTo() {
    return browser.get('/');
  }

  getHomeUrl() {
    return 'http://localhost:4200/';
  }

  getBrowser() {
    return browser;
  }

  getMainFooting() {
    return element(by.css('app-footer a.footer-brand'));
  }
}

export class FeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrowser() {
    return browser;
  }

  getNewStoriesButton() {
    return element(by.css('app-article-list label.newBtn'));
  }

  getTopStoriesButton() {
    return element(by.css('app-article-list label.topBtn'));
  }

  getBestStoriesButton() {
    return element(by.css('app-article-list label.bestBtn'));
  }

  getSearchBarInput() {
    return element(by.css('app-article-list input.searchBar'));
  }

  getAllFeedItems() {
    return element.all(by.css('app-article-list .article .articleLink'));
  }

  getPaginationPreviousButton() {
    return element(by.css('app-article-list pagination-controls .pagination-previous'));
  }

  getPaginationNextButton() {
    return element(by.css('app-article-list pagination-controls .pagination-next'));
  }

}
