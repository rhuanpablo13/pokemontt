import { PokemonPage } from './pokemons.po';
import { browser, logging } from 'protractor';

describe('workspace-project Pokemons', () => {
  let page: PokemonPage;

  beforeEach(() => {
    page = new PokemonPage();
  });

  it('should display search pokemon', () => {
    page.navigateTo();
    browser.pause();

    page.getInputSearch().sendKeys('AZ');

    page.getButtonSearch().click();

    expect(page.getListSearch()).toContain('AZ')
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
