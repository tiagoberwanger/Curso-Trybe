import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../reducers';
import fetchMock from 'fetch-mock-jest'
import thunk from 'redux-thunk'


//combinar os reducers
const rootReducer = combineReducers({ reducer });

//FUNÇÃO PADRÃO DE TESTES ABAIXO
const renderWithRedux = (
  component,
  { initialState, 
    store = createStore(rootReducer, applyMiddleware(thunk), initialState) 
  } = {}) => {
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

describe('testing GOT results', () => {
  beforeEach(cleanup);

  test('testing API', async() => {
    const { getByText, getByRole } = renderWithRedux(<App />);
    const searchButton = getByRole('button', { name: 'Search!'})
    fetchMock.getOnce('https://anapioficeandfire.com/api/characters?name=jon+snow', { 
      body: { name: 'Jon Snow'}
    })
    fireEvent.click(searchButton)
    await waitFor(() => expect(fetchMock.called()).toBeTruthy())
  });

  // test('test if click with empty input', async() => {
  //   const { getByText, getByRole } = renderWithRedux(<App />);
  //   const searchButton = getByRole('button', { name: 'Search!'})
  //   fireEvent.click(searchButton)
  //   await waitFor(() => expect(getByText('Preencha este campo.')).toBeInTheDocument())
  // });

  // test('test click after fill input with character name', async() => {
  //   const { getByText, getByRole, getByTestId } = renderWithRedux(<App />);
  //   const searchInput = getByTestId('input')
  //   fireEvent.change(searchInput, { target: { value: 'Jon Snow' } })
  //   const searchButton = getByRole('button', { name: 'Search!'})
  //   fireEvent.click(searchButton)
  //   await waitFor(() => expect(getByText('Jon Snow')).toBeInTheDocument())
  // });

});
