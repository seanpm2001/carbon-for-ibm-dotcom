/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings.js';
import ddsSettings from '../../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import DDSMegaMenu from '../megamenu';
import styles from './cloud-masthead.scss';
import { carbonElement as customElement } from '../../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Cloud MegaMenu.
 *
 * @element dds-cloud-megamenu
 */
@customElement(`${ddsPrefix}-cloud-megamenu`)
class DDSCloudMegaMenu extends DDSMegaMenu {
  render() {
    return html`
      <div class="${prefix}--masthead__megamenu__container">
        <div class="${prefix}--masthead__megamenu__container--row">
          <slot></slot>
        </div>
      </div>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--masthead__megamenu`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSCloudMegaMenu;
