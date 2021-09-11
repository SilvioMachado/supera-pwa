import React from 'react';

import MenuList from '../components/menu-list';

import playIcon from 'images/icon-play.svg';
import chatIcon from 'images/icon-chat.svg';

export default {
  title: 'Menu List',
  component: MenuList
};

const Template = (args) => <MenuList {...args} />

export const Default = Template.bind({});
Default.args = {
  menuItemList: [
    {imgSource: playIcon, text: 'JOGAR'},
    {imgSource: chatIcon, text: 'CHAT'},
    {imgSource: playIcon, text: 'JOGAR'}
  ]
};
