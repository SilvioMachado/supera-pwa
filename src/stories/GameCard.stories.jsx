import React from 'react';

import GameCard from '../components/GameCard';
import { GAME } from './const';

export default {
  title: 'GameCard',
  component: GameCard
};

const Template = (args) => <GameCard {...args} />

export const Default = Template.bind({});
Default.args = {
  game: GAME,
  onClick: () => alert('onClick')
};
