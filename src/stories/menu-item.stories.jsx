import React from 'react';

import MenuItem from '../components/MenuItem';

import playIcon from 'images/icon-play.svg';


export default {
  title: 'Menu Item',
  component: MenuItem
}

const Template = (args) => <MenuItem {...args} />

export const Default = Template.bind({});
Default.args = {
  imgSource: playIcon,
  text: 'JOGAR'
};
