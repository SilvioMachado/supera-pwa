import React from 'react';

import HomePage from '../pages/HomePage';

export default {
  title: 'Home Page',
  component: HomePage
};

const Template = (args) => <HomePage {...args} />

export const Default = Template.bind({});
Default.args = {};