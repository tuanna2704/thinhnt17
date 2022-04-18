import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { data } from './data';
import ListItem from '../components/ListItems';

export default {
  title: 'ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return (
    <Provider store={store}>
      <ListItem {...args} />
    </Provider>
  );
};

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  data,
};