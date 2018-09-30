import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: true,
});

setAddon(infoAddon);

const context = require.context('../src', true, /\.story\.js$/);

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);