import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrencyInput from '../components/inputCurrency';
import userEvent from '@testing-library/user-event';

describe('Testa o componente reutilizável inputCurrency', () => {
  beforeEach(() => {
    render(
      <CurrencyInput
        labelTitle="Teste de Mock"
        name="teste"
        onChange={ () => console.log('teste') }
      />
    );
  });
  test('Deve testar o título da label', () => {
    const titleLabel = screen.getByText(/teste de mock/i);
    expect(titleLabel).toBeInTheDocument();
  });

  test('Deve testar ao passar a prop input=false se retorna uma lista de options', async () => {
    userEvent.selectOptions(screen.getByLabelText('Teste de Mock'), ['EUR']);
    expect(screen.getByRole('option', {name: 'EUR'}).selected).toBe(true);
    expect(screen.getByRole('option', {name: 'BRL'}).selected).toBe(false);
    expect(screen.getByRole('option', {name: 'JPY'}).selected).toBe(false);
  });
});

describe('Testa o componente reutilizável inputCurrency no tipo input de texto', () => {
  test('Deve testar ao passar a prop input=true se retorna um input de texto', () => {
    render(
      <CurrencyInput
        labelTitle="Teste de Mock"
        name="teste"
        onChange={ () => console.log('teste') }
        input={ true }
      />
    );
    const inputType = screen.getByLabelText('Teste de Mock');
    expect(inputType).toBeInTheDocument();
    expect(inputType.type).toBe('text');
  });
});