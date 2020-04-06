import { newSpecPage } from '@stencil/core/testing';
import { CustomIcon } from './custom-icon';

describe('custom-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomIcon],
      html: `<custom-icon></custom-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-icon>
    `);
  });
});
