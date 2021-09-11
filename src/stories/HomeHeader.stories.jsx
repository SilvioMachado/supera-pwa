import React from 'react';

import HomeHeader from '../components/HomeHeader';

export default {
  title: "Home Header",
  component: HomeHeader
};

const Template = (args) => <HomeHeader {...args} />

export const Default = Template.bind({});
Default.args = {
  userName: 'Silvio Machado',
  ipc: 20
};
