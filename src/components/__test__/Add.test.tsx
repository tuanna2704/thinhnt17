import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Add from 'components/Add'
import '../../setupTests'

const initialState = {}
const mockStore = configureStore()
let wrapper
let store

describe('AddProduct test', () => {
    const mockSubmit = jest.fn()
  
    beforeEach(() => {
      store = mockStore(initialState)
      wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Add />
          </BrowserRouter>
        </Provider>
      )
    })
    
    })