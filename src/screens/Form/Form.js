import { Component, prepareComponent } from 'helpers/engine';

import Logo from 'components/Logo';
import Button from 'components/Button';
import InputText from 'components/InputText';
import PasswordStrength from 'components/PasswordStrength';
import styles from './Form.sass';

import {
  defaultValidation,
  nameValidation,
  emailValidation,
  confirmapassValidation,
} from './validations';

import {
  INITIAL_FIELD,
} from './constants';

const isFormValid = form => (
  form.name.isValid
    && form.email.isValid
    && form.password.isValid
    && form.confirmpass.isValid
);

const isFieldChanged = (pField, nField) => pField.value !== nField.value || pField.isValid !== nField.isValid

class Form extends Component {
  componentWillMount() {
    this.state = {
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
  }

  componentDidMount() {
    this.listeners = [
      this.listen('name').bind(this),
      this.listen('email').bind(this),
      this.listen('password').bind(this),
      this.listen('confirmpass').bind(this),
    ];
  }

  listen(fieldName) {
    return (previousState, nextState) => {
      const nField = { ...nextState.form[fieldName] };
      const { value, isValid } = nField;
      const { child: Component } = this.getChildComponentRefByName(fieldName);

      Component.component.setState({ value, isValid });
    }
  }

  setStateChanges(fieldName, value, isValid) {

  }

  handleChangeField(fieldName) {
    return (event, previuosIsValid) => {
      const { password, confirmpass } = this.state.form;
      const { value } = event.target;
      let isValid;
      let fieldsState = {};

      switch(fieldName) {
        case 'name':
          isValid = nameValidation(value);
          break;
        case 'email':
          isValid = emailValidation(value);
          break;
        case 'confirmpass': {
          isValid = confirmapassValidation(password.value, value);
          break;
        }
        case 'password': {
          const { child: ConfirmPassField } = this.getChildComponentRefByName('confirmpass');
          const isValidConfirmPass = confirmapassValidation(value, confirmpass.value);
          isValid = previuosIsValid;

          fieldsState = {
            confirmpass: {
              value: confirmpass.value,
              isValid: isValidConfirmPass,
            }
          };
        }
      }

      fieldsState = {
        ...fieldsState,
        [fieldName]: {
          isValid,
          value,
        }
      }

      this.setState(({ form }) => ({
        form: {
          ...form,
          ...fieldsState,
        },
      }));
    }
  }

  handleClick(onSubmit, form) {
    if (isFormValid(form)) {
      onSubmit(form);
    }
  };

  render() {
    this.template`
      <div class="${styles.container}">
        <div class="${styles.header}">
          ${Logo('olist-logo')}
        </div>
        <div>
          <div class="${styles.subtitle}">
            <h2>Crie sua conta</h2>
          </div>

          ${InputText('name', {
            type: 'text',
            label: 'Nome completo',
            onChange: this.handleChangeField('name'),
          })}

          ${InputText('email', {
            type: 'text',
            label: 'E-mail',
            onChange: this.handleChangeField('email'),
          })}

          ${PasswordStrength('password', {
            label: 'Nome completo',
            onChange: this.handleChangeField('password'),
            value: '',
          })}

          ${InputText('confirmpass', {
            type: 'password',
            label: 'Nome completo',
            onChange: this.handleChangeField('confirmpass'),
          })}

          <div class="${styles.footer}">
            ${Button('button', {
              type: 'button',
              onClick: () => {},
              text: 'Criar conta',
            })}
          </div>
        </div>
      </div>
    `;
  }
}

export default prepareComponent(Form);