import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import { enhancer } from 'addon-redux';
import ListItem from '../components/ListItems';

const store = createStore(
  rootReducer,
  { data: {
    items: [
      {id: 1, description: "Something", watchers_count: 10, language: ['JS'], open_issues: 12, privates: true},
      {id: 2, description: "Something", watchers_count: 10, language: ['JS'], open_issues: 12, privates: true}
    ]
  }},
  enhancer
);

export default {
  title: 'ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ListItem {...args} />
      </Provider>
    </BrowserRouter>
  );
};

export const DefaultTable = Template.bind({});
DefaultTable.args = {};