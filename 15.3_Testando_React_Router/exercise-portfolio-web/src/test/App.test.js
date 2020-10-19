import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter'

test('check current page', () => {
  const { getByText } = renderWithRouter(<App />);

  const homepage = getByText(/Tiago Berwanger/i);
  expect(homepage).toBeInTheDocument();

});

test('renders learn react link', () => {
  const { getByText, history } = renderWithRouter(<App />);

  fireEvent.click(getByText(/Projetos/i))
  const pathname = history.location.pathname;
  expect(pathname).toBe('/projects')
  const projects = getByText(/Projetos/i)
  expect(projects).toBeInTheDocument();
  
});


// test('renders learn react link', () => {
//   const { getByText, history } = renderWithRouter(<App />);

//   history.push('/pagina-que-nao-existe');

//   expect(getByText(/Página não encontrada/i)).toBeInTheDocument();
// });
