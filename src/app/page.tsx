'use client'
import { useState, useEffect } from 'react';
import { getContador, updateContador } from '../../server/user';

type ContadorResponse = {
  contador: number;
} | null;

const IndexPage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await getContador();
        setCounter(response?.contador ?? 0);
      } catch (error) {
        console.error('Error fetching counter:', error);
      }
    };

    fetchCounter();

    // Actualizar el valor del contador cada 2 segundos
    const intervalId = setInterval(fetchCounter, 2000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  const incrementCounter = async () => {
    try {
      const newCounter = counter + 1;
      await updateContador(newCounter);
      setCounter(newCounter);
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  };

  const decrementCounter = async () => {
    try {
      const newCounter = counter - 1;
      await updateContador(newCounter);
      setCounter(newCounter);
    } catch (error) {
      console.error('Error decrementing counter:', error);
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.counter}>Contador: {counter}</p>
      <div style={styles.buttonContainer}>
        <button onClick={incrementCounter} style={styles.button}>+</button>
        <button onClick={decrementCounter} style={styles.button}>-</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  
    fontFamily: 'Arial, sans-serif'
  },
  counter: {
    fontSize: '2em',
    marginBottom: '20px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin: '0 10px'
  }
};

export default IndexPage;
