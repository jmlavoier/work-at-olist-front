import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Logo from './Logo';

storiesOf('Logo', module)
  .add('Default', withInfo()(() => <Logo />));
