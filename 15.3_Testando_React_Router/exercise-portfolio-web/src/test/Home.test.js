import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, getByText, screen, getAllByRole } from '@testing-library/react';
import App from '../App';

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
  const { history, getByText, getByRole } = renderWithRouter(<App />);
  history.push('/');
  fireEvent.click(screen.getByText(/Sobre/i));
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
  expect(getByText('Sobre')).toBeInTheDocument();
  // history.push('/')
  // const aboutLink = getByText(/Sobre/i)
  // const aboutLink = getByRole('link', {name: 'Sobre'})
  // fireEvent.click(getByRole('link', {name: 'Projetos'}));
  // console.log(history.location.pathname)
  // expect(history.location.pathname).toBe("/about");
  // history.push('/');
  // fireEvent.click(getByText('Projetos'));
  // expect(history.location.pathname).toBe("/projects");
  // history.push('/');
  // fireEvent.click(getByText('Contato'));
  // expect(history.location.pathname).toBe("/contact");
})