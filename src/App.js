import React from 'react';
import './App.css';
import Image from './Image'
import Likes from './Likes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  likes: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        likes: state.likes + 1
      }
    case 'DECREMENT':
      return {
        likes: state.likes - 1
      }
    default:
      return state 
  }
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Image />
    <Likes />
  </Provider>

)

export default App;
