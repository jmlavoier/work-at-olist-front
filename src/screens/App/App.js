import { Component } from 'helpers/engine';
import styles from './App.sass';

import api from 'api';

import Form from 'screens/Form';
import Success from 'screens/Success';

import {
  SCREENS
} from './constants';

class App extends Component {
  constructor() {
    super();

    this.state = {
      screen: SCREENS.form,
    }
  }

  componentDidMount() {
    const { startedComponent: Form } = this.getChildComponentRefByName('form');
    const { startedComponent: Success } = this.getChildComponentRefByName('success');

    Success.unmountComponent();

    this.listeners = [
      (previousState, nextState) => {
        if (previousState.screen !== nextState.screen && nextState.screen === SCREENS.success) {
          Form.unmountComponent();
          Success.mountComponent();
        }
      },
    ];
  }

  navigateSucceess() {
    this.setState({
      screen: SCREENS.success,
    });
  }

  onSubmit(form) {
    api.postForm(form).then((data) => {
      if (data.status === '200') {
        this.navigateSucceess();
      }
    });
  }

  render() {
    this.template`
      <div class="${styles.container}">
        <div class="${styles.box}">
          ${Form('form', { onSubmit: this.onSubmit.bind(this) })}
          ${Success('success', {})}
        </div>
      </div>
    `;
  }
}

export default new App;