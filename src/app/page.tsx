'use client'
import { useState, useEffect } from 'react';
import { getContador, updateContador } from '../../server/user';
import { get } from 'http';

type contadorr =
{
  contador: number;
};

const IndexPage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getContador().then((result: contadorr) => {
      setCounter(result.contador);
    });
  }, []);
  const incrementCounter = () => {
    setCounter(counter + 1);
    getContador()

  }

  return (
    <div>
      <p>Contador: {counter}</p>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
};

export default IndexPage;

