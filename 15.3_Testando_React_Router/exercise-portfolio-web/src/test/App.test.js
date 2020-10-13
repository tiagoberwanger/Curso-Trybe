import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter'

test('renders learn react link', () => {
  const { getByText, history } = renderWithRouter(<App />);

  const referencePage = getByText(/texto da página/i);
  expect(referencePage).toBeInTheDocument();

  fireEvent.click(getByText(/texto do link/i))
  const { pathname } = history.location;
  expect(pathname).toBe('/url')
  const page = getByText(/texto da página/i)
  expect(page).toBeInTheDocument();
});


test('renders learn react link', () => {
  const { getByText, history } = renderWithRouter(<App />);

  history.push('/pagina-que-nao-existe');

  expect(getByText(/Página não encontrada/i)).toBeInTheDocument();
});
