import { browser, by, element } from 'protractor';

export class PokemonPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getInputSearch() {
    return element(by.id('input-search'));
  }

  getButtonSearch() {
    return element(by.id('btn-search'));
  }

  getListSearch() {
    return element(by.css('#list-pokemon li'));
  }
}
