import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InputText from './InputText';

storiesOf('InputText', module)
  .add('Default', withInfo()(() => (
    <InputText value="João Milton" onChange={() => {}}/>
  )))
  .add('Invalid', withInfo()(() => (
    <InputText value="João Milton" onChange={() => {}} isValid={false}/>
  )))
  .add('With label', withInfo()(() => (
    <InputText value="João Milton" onChange={() => {}} label="Nome completo" isValid/>
  )));