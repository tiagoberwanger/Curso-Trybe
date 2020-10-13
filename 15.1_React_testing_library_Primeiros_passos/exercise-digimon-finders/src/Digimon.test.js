import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const { digimon } = this.props;
    const { getByTestId, getByText } = render(<Digimon digimon={digimon} />);
    const input = getByTestId("input")
    const button = getByTestId("buttonSearch")
    const name = getByTestId("digimonName")
    const level = getByTestId("digimonLevel")

    fireEvent.change(input, {target: {value: 'agumon'}});
    fireEvent.click(button);
    await waitForElement(() => getByText("agumon"))
    expect(getByText("agumon")).toBeInTheDocument();
    expect(name).toBeInTheDocument()
    expect(name).toBe("agumon")
    expect(level).toBeInTheDocument()
    expect(level).toHaveTextContent("Rookie")

  });
});