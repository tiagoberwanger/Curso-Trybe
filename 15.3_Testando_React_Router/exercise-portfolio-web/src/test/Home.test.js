import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Home from '../pages/Home';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{ component }</Router>), history,
  });
};

test('test if name appears in homepage', () => {
    const { history, getByText } = renderWithRouter(<App />);
    history.push('/');
    expect(getByText('Tiago Berwanger')).toBeInTheDocument();
});

test('test if role appears in homepage', () => {
  const { history, getByText } = renderWithRouter(<App />);
  history.push('/');
  expect(getByText('Full Stack Dev')).toBeInTheDocument();
});

test('test if rocket image appears in homepage', () => {
  const { history, getByAltText } = renderWithRouter(<App />);
  history.push('/');
  expect(getByAltText('logo')).toBeInTheDocument();
});

test('test if links work in homepage', () => {
  const { history, getByText } = renderWithRouter(<Home />);
  history.push('/');
  fireEvent.click(getByText(/Sobre/i));
  expect(history.location.pathname).toBe('/about');
  expect(getByText('Sobre')).toBeInTheDocument();
  history.push('/');
  fireEvent.click(getByText('Projetos'));
  expect(history.location.pathname).toBe("/projects");
  expect(getByText('Projetos')).toBeInTheDocument();
  history.push('/');
  fireEvent.click(getByText('Contato'));
  expect(history.location.pathname).toBe("/contact");
  expect(getByText('Contato')).toBeInTheDocument();
})