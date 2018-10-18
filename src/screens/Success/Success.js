import { Component, prepareComponent } from 'helpers/engine';

import Box from 'components/Box';

import Logo from 'components/Logo';
import IconRight from 'components/IconRight';

import styles from './Success.sass';

class Success extends Component {
  render() {
    this.template`
      <div class="${styles.success}">
        <div class="${styles.box}">
          <div class="${styles.header}">
            ${Logo('olist-logo')}
          </div>
          <div>
            <div class="${styles.icon}">
            ${IconRight('icon', {})}
            </div>
            <div class="${styles.body}">
              <h2>Tudo certo</h2>
              <p>
                Verifique sua caixa de entrada para confirmar seu e-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default prepareComponent(Success);
