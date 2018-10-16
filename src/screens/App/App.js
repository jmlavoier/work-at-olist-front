import { Component } from 'helpers/engine';
import styles from './App.sass';

import Form from 'screens/Form';

class App extends Component {
  constructor() {
    super();
  }

  onClick() {
    const Button = this.getChildComponentRefByName('send');
    Button.child.component.setState({ isLoading: true });

    setTimeout(() => {
      Button.child.component.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    this.template`
      <div class="${styles.container}">
        <div class="${styles.box}">
          ${Form('form', {})}
        </div>
      </div>
    `;
  }
}

export default new App;