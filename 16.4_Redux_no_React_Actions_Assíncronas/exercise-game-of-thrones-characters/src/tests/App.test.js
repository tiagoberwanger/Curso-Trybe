import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { createStore, combineReducers } from 'redux';
import reducer from '../reducers';


//FUNÇÃO PADRÃO DE TESTES ABAIXO
const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ reducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
//FUNÇÃO PADRÃO DE TESTES ACIMA

describe('testing GOT search', () => {
  beforeEach(cleanup);

  test('check if h1 title is ok', () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText('Type a character below:')).toBeInTheDocument();
  });

  test('check if input is working', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const searchInput = getByTestId('input')
    expect(searchInput).toBeInTheDocument();
  });
  
  test('check if button is working', () => {
    const { getByRole } = renderWithRedux(<App />);
    const searchButton = getByRole('button', { name: 'Search!'})
    expect(searchButton).toBeInTheDocument();
  });
});

// describe('testing GOT results', () => {
//   beforeEach(cleanup);

//   test('test if click with empty input', () => {
//     const { getByText, getByRole } = renderWithRedux(<App />);
//     const searchButton = getByRole('button', { name: 'Search!'})
//     fireEvent.click(searchButton)
//     expect(getByText('Preencha este campo.'))
//   });

//   test('test click after fill input with character name', () => {
//     const { getByText, getByRole, getByTestId } = renderWithRedux(<App />);
//     const searchInput = getByTestId('input')
//     fireEvent.change(searchInput, { target: { value: 'Jon Snow' } })
//     const searchButton = getByRole('button', { name: 'Search!'})
//     fireEvent.click(searchButton)
//     expect(getByText('Jon Snow')).toBeInTheDocument()
//   });

// });