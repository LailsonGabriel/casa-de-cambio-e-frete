import React from 'react';
import { render } from '@testing-library/react';
import Home from "../components/home/index";
import { fetchMocked } from './mockData';

describe('Testa o componente Home', () => {
  test('Testa mock na requisição a API e verifica se foi chamada', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(fetchMocked),
    });

    render(<Home />);

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://v6.exchangerate-api.com/v6/37785b490984f9e5b947af44/latest/BRL'
    );
  });
});