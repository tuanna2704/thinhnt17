import React from 'react'
import configureStore from 'redux-mock-store'
import { mount, render, shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as reactRedux from 'react-redux'; 
import Add from '../Add'

const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedNavigator.mockImplementation(() => ({})),
}));

describe('AddProduct test', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    mockedNavigator.mockClear()
  })

  it('Check Button status  with normal flow', () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

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
    expect(wrapper.find('button').first().text()).toEqual('Submit')
    
    // Trigger input
    wrapper.find('input[name="id"]').simulate('change', { target: { value: 11, name: 'id' } })
    wrapper.find('input[name="name"]').simulate('change', { target: { value: 'Name Something', name: 'name' } })
    // Expect input change correctly
    expect(wrapper.find('input[name="name"]').render().attr('value')).toEqual('Name Something')
    expect(wrapper.find('input[name="id"]').render().attr('value')).toEqual('11')
    // Trigger submit
    wrapper.find('button').at(0).simulate('click')
    expect(dummyDispatch).toHaveBeenCalled()
    expect(mockedNavigator).toHaveBeenCalledWith("/")
  });

  it('Check click cancel button', () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

    const mockStore = configureStore();
    const store = mockStore({
      data: {
        items: [{id: 11}]
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Add />
        </BrowserRouter>
      </Provider>
    )
    
    // Trigger Cancel button
    wrapper.find('button').at(1).simulate('click')
    expect(mockedNavigator).toHaveBeenCalledWith("/")
  });

  it('Check case id existed', () => {
    // jest.spyOn(window, 'alert').mockImplementation(() => {});
    const mockStore = configureStore();
    const store = mockStore({
      data: {
        items: [{id: 11}]
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Add />
        </BrowserRouter>
      </Provider>
    )
    
    // Trigger input
    wrapper.find('input[name="id"]').simulate('change', { target: { value: 11, name: 'id' } })
    wrapper.find('input[name="name"]').simulate('change', { target: { value: 'Name Something', name: 'name' } })

    // Trigger submit
    wrapper.find('button').at(0).simulate('click')
    expect(window.alert).toHaveBeenCalledWith("Id đã tồn tại")
  });
})
