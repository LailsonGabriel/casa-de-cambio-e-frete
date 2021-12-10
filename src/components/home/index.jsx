import React, { useEffect, useState } from 'react';
import { requestAPI } from '../../services/reusable';
import TotalAmout from '../total';
import UserInteraction from '../UserInteraction';
import { ContainerHome } from './styles';

export default function Home() {
  const [convertCurrency, setConvertCurrency] = useState([]);
  const [inputs, setInputs] = useState({
    from: 'BRL',
    to: 'EUR',
    value: 0,
  });

  useEffect(() => {
    async function response() {
      setConvertCurrency(await requestAPI(inputs.from))
    };
    response();
  }, [inputs.from]);

  function handleInputs({ target }) {
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
  }

  return (
    <ContainerHome>
      <div>
        <h1>Casa de Câmbio</h1>
        <UserInteraction
          handleInputs={handleInputs}
          inputs={inputs}
        />
        {convertCurrency.conversion_rates &&
          <TotalAmout
            currency={inputs.value}
            convert={convertCurrency.conversion_rates[inputs.to]}
            to={inputs.to}
          />
        }
        <p>{String(new Date())}</p>
      </div>
    </ContainerHome>
  );
}
