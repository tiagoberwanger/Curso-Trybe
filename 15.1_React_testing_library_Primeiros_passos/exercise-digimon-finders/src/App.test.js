import React from 'react';
import { render, getByRole, fireEvent, waitForDomChange, waitForElement } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('check if input exists', async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input")
    expect(input).toBeInTheDocument();
  })

  it('renders an error message when digimon is not found', async () => {
    const { getByTestId,getByText } = render(<App />);
    const input = getByTestId("input")
    const button = getByTestId("buttonSearch")

    fireEvent.change(input, {target: {value: 'dasdafas'}});
    fireEvent.click(button);
    await waitForDomChange(() => getByText(/is not a Digimon in our database/))
    expect(getByText(/is not a Digimon in our database/)).toBeInTheDocument()

  })

  it('renders a digimon when it is found', async () => {
    const { getByTestId, getByText } = render(<App />);
    const input = getByTestId("input")
    const button = getByTestId("buttonSearch")

    fireEvent.change(input, {target: {value: 'agumon'}});
    fireEvent.click(button);
    await waitForElement(() => getByText("Agumon"))
    expect(getByText("Agumon")).toBeInTheDocument()

  })

});