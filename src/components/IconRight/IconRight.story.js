import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import IconRight from './IconRight';

storiesOf('IconRight', module)
  .add('Default', withInfo()(() => <IconRight />));
