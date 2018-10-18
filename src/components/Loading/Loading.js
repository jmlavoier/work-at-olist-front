import { Component, prepareComponent } from 'helpers/engine';
import styles from './Loading.sass';

class Loading extends Component {
  render() {
    this.template`
      <div class="${styles.loading}">
        <span class="${styles.spin1}"></span>
        <span class="${styles.spin2}"></span>
        <span class="${styles.spin3}"></span>
      </div>
    `;
  }
}

export default prepareComponent(Loading);
