import { newSpecPage } from '@stencil/core/testing';
import { CustomIcon } from './custom-icon';

describe('custom-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomIcon],
      html: `<custom-icon></custom-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-icon color="black">
        <mock:shadow-root>
          <i class="icon icon-undefined undefined" style="color: black;"></i>
        </mock:shadow-root>
      </custom-icon>
    `);
  });
});
