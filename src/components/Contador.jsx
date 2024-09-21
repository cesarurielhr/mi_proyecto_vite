import React from 'react';
import {useState} from 'react';
export const Contador = () => {
    const [valor, setValor] = useState(0);
   const totalvalor = (numero) => {
    setValor(valor + numero); // Suma 'numero' al valor actual
  };
  const decrementarValor = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    setValor(valor - numeroAleatorio); // Resta el número aleatorio al valor actual
  console.log("se decremento:",numeroAleatorio);
};
    console.log(valor);
    
    return (
        <div>
           
            <h1>
                Usando useState
            </h1>

            <h2>
                Contador: {valor}
            </h2>
                <button onClick={() => totalvalor(5)}>Incrementar 5</button>
                <button onClick={() => totalvalor(10)}>Incremenar 10</button>
                <button onClick={decrementarValor}>Decrementar aleatoriamente</button>
           
        </div>
    )
};