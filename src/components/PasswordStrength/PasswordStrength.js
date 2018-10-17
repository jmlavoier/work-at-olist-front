import { Component, prepareComponent } from 'helpers/engine';

import InputText from 'components/InputText';
import styles from './PasswordStrength.sass';

import {
  createRules,
  getStrengthvalue,
  getStylesBar1,
  getStylesBar2,
  getStylesBar3,
  getStylesRule,
  styleSheet,
} from './helpers';

class PasswordStrength extends Component {
  componentWillMount() {
    this.state = {
      value: this.props.value,
      isValid: true,
    }
  }

  componentDidMount() {
    const { startedComponent: inputPassword } = this.getChildComponentRefByName('password');
    const bar1 = this.element.querySelector('#bar1');
    const bar2 = this.element.querySelector('#bar2');
    const bar3 = this.element.querySelector('#bar3');
    const rule1 = this.element.querySelector('#rule1');
    const rule2 = this.element.querySelector('#rule2');
    const rule3 = this.element.querySelector('#rule3');

    this.listeners = [
      (previusState, nextState) => {
        if (previusState.value !== nextState.value) {
          const { value, isValid } = nextState;
          const rules = createRules(value);
          const strengthValue = getStrengthvalue(rules);

          inputPassword.setState({
            value,
            isValid,
          });

          bar1.className = getStylesBar1(strengthValue);
          bar2.className = getStylesBar2(strengthValue);
          bar3.className = getStylesBar3(strengthValue);
          rule1.className = getStylesRule(value, rules.hasMinChar);
          rule2.className = getStylesRule(value, rules.hasUppercase);
          rule3.className = getStylesRule(value, rules.hasNumber);
        }
      }
    ];
  }

  handleChange(event) {
    const { onChange } = this.props;
    const { value } = event.target;
    const rules = createRules(value);
    const strengthValue = getStrengthvalue(rules);
    const isValid = strengthValue === 3;

    onChange(event, isValid);
  };


  render() {
    const { value, name } = this.props;
    const rules = createRules(value);
    const strengthValue = getStrengthvalue(rules);

    this.template`
      <div>
        ${InputText(
          'password',
          {
            name,
            type: 'password',
            label: 'Senha',
            style: styleSheet.InputText,
            value: '',
            onChange: this.handleChange.bind(this),
          }
        )}
        <div>
          <div class="${styles['strength-bars']}">
            <span id="bar1" class="${getStylesBar1(strengthValue)}"></span>
            <span id="bar2" class="${getStylesBar2(strengthValue)}"></span>
            <span id="bar3" class="${getStylesBar3(strengthValue)}"></span>
          </div>
          <ul class="${styles.rules}">
            <li id="rule1" class="${getStylesRule(value, rules.hasMinChar)}">Pelo menos 6 caracteres</li>
            <li id="rule2" class="${getStylesRule(value, rules.hasUppercase)}">Pelo menos 1 letra maiúscula</li>
            <li id="rule3" class="${getStylesRule(value, rules.hasNumber)}">Pelo menos 1 número</li>
          </ul>
        </div>
      </div>
    `;
  }
}

export default prepareComponent(PasswordStrength);
