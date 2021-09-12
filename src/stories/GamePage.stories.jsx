import React from 'react';

import PlayPage from '../pages/PlayPage';
import { GAME } from './const';

export default {
  title: 'PlayPage',
  component: PlayPage
};

const Template = (args) => <PlayPage {...args} />

export const Default = Template.bind({});
Default.args = {
  gameService: () => [GAME, GAME, GAME, GAME, GAME, GAME, GAME, GAME, GAME, GAME, GAME]
};
