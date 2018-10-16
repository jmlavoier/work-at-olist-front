import { Component, prepareComponent } from 'helpers/engine';

import styles from './InputText.sass';

class InputText extends Component {
  componentWillMount() {
    this.state = {
      entered: false,
      isValid: true,
      value: '',
    };
  }

  componentDidMount() {
    const inputElement = this.element.querySelector('input');

    this.events = [
      {
        el: inputElement,
        events: {
          focus: this.handleOnFocus.bind(this),
          keyup: this.handleChange.bind(this),
        }
      }
    ];

    this.listeners = [
      (previousState, nextState) => {
        if (previousState.value !== nextState.value) {
          inputElement.value = nextState.value;
        }
      },
      (previousState, nextState) => {
        const { isValid, entered, value } = nextState;

        if (entered && !isValid) {
          inputElement.classList.remove(styles.valid);
          inputElement.classList.add(styles.invalid);
          return;
        }

        if (value && isValid) {
          inputElement.classList.remove(styles.invalid);
          inputElement.classList.add(styles.valid);
          return;
        }

        inputElement.classList.remove(styles.invalid);
        inputElement.classList.remove(styles.valid);
      }
    ]
  }

  handleChange(event) {
    const { onChange } = this.props;
    const { isValid } = this.state;

    onChange(event, isValid);
  }

  handleOnFocus() {
    this.setState({
      entered: true,
    });
  }

  render() {
    const {
      label = '',
      type = 'text',
      style = '',
    } = this.props;

    this.template`
      <div>
        ${label && `<span class="${styles.label}">${label}</span>`}
        <input
          type="${type}"
          class="${styles['input-text']}"
          style="${style}"
        />
      </div>
    `;
  }
}

export default prepareComponent(InputText);
