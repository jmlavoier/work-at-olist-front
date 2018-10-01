import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import PasswordStrength from './PasswordStrength';

class WrapperPasswordStrength extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <PasswordStrength value={this.state.value} onChange={this.onChange}/>
    )
  }
}

storiesOf('PasswordStrength', module)
  .add('Blank', withInfo()(() => <PasswordStrength value="" onChange={() => {}}/>))
  .add('Attending one rule', withInfo()(() => <PasswordStrength value="Xxxx" onChange={() => {}}/>))
  .add('Attending one rules', withInfo()(() => <PasswordStrength value="Xxxxxx" onChange={() => {}}/>))
  .add('Attending all rules', withInfo()(() => <PasswordStrength value="1Xxxub" onChange={() => {}}/>))
  .add('Try yourself', withInfo()(() => <WrapperPasswordStrength />));


// hasMinChar
// hasUppercase
// hasNumber