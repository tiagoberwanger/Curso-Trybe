import React from 'react';
import './App.css';
import Form from './Form'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux'

function App() {
  return (
    <div>
    <Provider store={store}>
      <Form />
    </Provider>
    </div>
  );
}

export default App;
