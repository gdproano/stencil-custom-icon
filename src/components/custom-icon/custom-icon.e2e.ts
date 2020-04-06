import { newE2EPage } from '@stencil/core/testing';

describe('custom-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-icon></custom-icon>');

    const element = await page.find('custom-icon');
    expect(element).toHaveClass('hydrated');
  });
});
