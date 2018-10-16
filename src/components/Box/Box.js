import { Component, prepareComponent } from 'helpers/engine';
import Logo from 'components/Logo';

import styles from './Box.sass';

class Box extends Component {
  render() {
    const { children } = this.props;

    this.template`
      <div class="${styles.box}">
        <div class="${styles.header}">
          ${Logo('olist-logo')}
        </div>
        <div>
          ${children}
        </div>
      </div>
    `;
  }
}

export default prepareComponent(Box);
