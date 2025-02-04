/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement, property } from 'lit-element';
import ifNonNull from '../../internal/vendor/@carbon/web-components/globals/directives/if-non-null.js';
import ArrowRight16 from '../../internal/vendor/@carbon/web-components/icons/arrow--right/16.js';
import settings from 'carbon-components/es/globals/js/settings.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './masthead.scss';
import './megamenu-link-with-icon';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element.js';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * MegaMenu category group
 *
 * @element dds-megamenu-category-group
 */
@customElement(`${ddsPrefix}-megamenu-category-group`)
class DDSMegaMenuCategoryGroup extends LitElement {
  /**
   * href for the category group title
   */
  @property({ reflect: true })
  href = '';

  /**
   * category group title/heading
   */
  @property({ reflect: true })
  title = '';

  render() {
    const { href, title } = this;
    return html`
      <div class="${prefix}--masthead__megamenu__category-group-shield">
        <div class="${prefix}--masthead__megamenu__category-group-content">
          ${href
            ? html`
                <dds-megamenu-link-with-icon
                  href="${ifNonNull(href)}"
                  style-scheme="category-headline"
                  title="${title}">
                  <span>${title}</span>${ArrowRight16({ slot: 'icon' })}
                </dds-megamenu-link-with-icon>
              `
            : html`
                <div class="${prefix}--masthead__megamenu__category-headline">
                  <p>${title}</p>
                </div>
              `}
          <slot></slot>
        </div>
      </div>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSMegaMenuCategoryGroup;
