import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Loading from './Loading';

storiesOf('Loading', module)
  .add('Default', withInfo()(() => <div style={{
    backgroundColor: '#17d499',
    display: 'inline-block',
    padding: '5px',
  }}><Loading /></div>));
