import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from './Box';
import Logo from 'components/Logo';

storiesOf('Box', module)
  .add('Default', withInfo()(() => (
    <Box>
      <div style={{ textAlign: 'center' }}>
        <h2>Crie sua conta</h2>
      </div>
    </Box>
  )));
