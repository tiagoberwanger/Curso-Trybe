import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';


//FUNÇÃO PADRÃO DE TESTES ABAIXO
const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
//FUNÇÃO PADRÃO DE TESTES ACIMA

describe('testing clicks', () => {
    beforeEach(cleanup);
    test('the page should has a button and a text 0', () => {
      const { getByText } = renderWithRedux(<App />);
      const buttonAdicionar = getByText('Clique aqui');
  
      expect(buttonAdicionar).toBeInTheDocument();
      expect(getByText('0')).toBeInTheDocument();
    });

    test('if clicked should add 1 each click', () => {
        const { getByText } = renderWithRedux(<App />);
        const buttonAdicionar = getByText('Clique aqui');
    
        fireEvent.click(buttonAdicionar)
        expect(getByText('1')).toBeInTheDocument();
        fireEvent.click(buttonAdicionar)
        expect(getByText('2')).toBeInTheDocument();
        fireEvent.click(buttonAdicionar)
        expect(getByText('3')).toBeInTheDocument();
      });
  });