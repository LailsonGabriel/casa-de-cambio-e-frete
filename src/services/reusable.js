export async function requestAPI(currency) {
  const url = `https://v6.exchangerate-api.com/v6/37785b490984f9e5b947af44/latest/${currency}`;

  const request = await fetch(url).then((data) => data.json());
  return request;
}

// As moedas mais "importantes" foram colocadas nesse array, devido a API retornar
// vários tipos de moeda, mas se fosse necessário listar todas as moedas
// eu iria usar o Object.keys para pegar a chave das moedas no objeto "conversion_rates"
export const currencies = [
  'BRL',
  'USD',
  'EUR',
  'CAD',
  'JPY'
];
