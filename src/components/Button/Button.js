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

  onClick(event) {
    const { onClick } = this.props;
    this.setState((state) => ({ isLoading: !state.isLoading }));
    onClick(event)
  }

  componentDidMount() {
    this.events = [
      {
        el: this.element,
        events: {
          click: this.onClick.bind(this),
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
        if (previousState.isLoading !== nextState.isLoading) {
          const { text } = this.props;
          const { startedComponent: Loading } = this.getChildComponentRefByName('loading');

          if (nextState.isLoading) {
            Loading.mountComponent();
          } else {
            Loading.unmountComponent();
          }
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