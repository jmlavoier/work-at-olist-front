import React, { Component } from 'react';

import api from 'api';

import Form from 'screens/Form';
import Success from 'screens/Success';

import {
  SCREENS,
  INITIAL_FIELD,
} from './constants';
import styles from './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: SCREENS.form,
      form: {
        name: INITIAL_FIELD,
        email: INITIAL_FIELD,
        password: INITIAL_FIELD,
        confirmpass: INITIAL_FIELD,
        buttonSubmit: {
          isLoading: false,
        },
      },
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeField(fieldName, value, isValid) {
    this.setState(({ form }) => ({
      form: {
        ...form,
        [fieldName]: {
          isValid,
          value,
        },
      },
    }));
  }

  navigateSucceess() {
    this.setState({
      screen: SCREENS.success,
    });
  }

  handleSubmit(form) {
    this.setState(state => ({
      form: {
        ...state.form,
        buttonSubmit: {
          isLoading: true,
        },
      },
    }), () => {
      api.postForm(form).then((data) => {
        if (data.status === '200') {
          this.navigateSucceess();
        }
      });
    });
  }

  render() {
    const {
      screen,
      form,
    } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.box}>
          {screen === SCREENS.form && <Form onChange={this.handleChangeField} form={form} onSubmit={this.handleSubmit} />}
          {screen === SCREENS.success && <Success />}
        </div>
      </div>
    );
  }
}

export default App;
