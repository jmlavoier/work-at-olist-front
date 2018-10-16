import { Component, prepareComponent } from 'helpers/engine';
import Loading from 'components/Loading';

import styles from './Button.sass';

class Button extends Component {
  componentWillMount() {
    this.state = {
      disabled: true,
      isLoading: false,
    }
  }

  componentDidMount() {
    this.events = [
      {
        el: this.element,
        events: {
          click: this.props.onClick,
        },
      },
    ];

    this.listeners = [
      () => {
        const { disabled } = this.state;
        if (!disabled) {
          this.element.classList.add(styles.pointer);
        } else {
          this.element.classList.remove(styles.pointer);
        }
      },
      (previousState, nextState) => {
        const { text } = this.props;
        const { child: Loading } = this.getChildComponentRefByName('loading');

        if (nextState.isLoading) {
          this.element.innerHTML = '';
          this.element.appendChild(Loading.component.element);
        } else {
          this.element.innerText = text;
        }
      }
    ];
  }

  render() {
    this.template`
      <button type="button" class="${styles.button}">
        ${Loading('loading', {})}
      </button>
    `;
  }
}

export default prepareComponent(Button);