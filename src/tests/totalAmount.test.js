import React from 'react';
import { render, screen } from '@testing-library/react';
import TotalAmout from '../components/total';

describe('Testa o componente TotalAmount', () => {
  test('Deve converter R$50 Reais em Dólar', () => {
    render(
      <TotalAmout
        to="USD"
        currency={ 50 }
        convert={ 0.18 }
      />
    );
    const totalAmount = screen.getByRole('heading', { name: /9,00/i });
    expect(totalAmount).toBeInTheDocument();
    expect(totalAmount).toHaveTextContent('US$ 9,00');
  });

  test('Deve converter US$ 10,00 para Real', () => {
    render(
      <TotalAmout
        to="BRL"
        currency={ 10 }
        convert={ 5.62 }
      />
    );
    const totalAmount = screen.getByRole('heading', { name: /56/i });
    expect(totalAmount).toBeInTheDocument();
    expect(totalAmount).toHaveTextContent('R$ 56,20');
  })
});