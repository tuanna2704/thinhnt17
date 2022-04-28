import React from 'react'
import configureStore from 'redux-mock-store'
import { mount, render } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Add from '../Add'

describe('AddProduct test', () => {
  it('Check Button status ', () => {
    const mockStore = configureStore();
    const store = mockStore({
      data: {
        items: []
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Add />
        </BrowserRouter>
      </Provider>
    )

    // expect(wrapper.find('button').first().attr('disabled')).toEqual('disabled')
    // expect(wrapper.find('button').last().text()).toEqual('Cancel')
    // expect(wrapper.find('button').first().text()).toEqual('Submit')
    // console.log(wrapper.find('button').at(0).text())
    // wrapper.find('button').at(0).simulate('click')
    // wrapper.find('button').at(1).simulate('click')
  });
  
})