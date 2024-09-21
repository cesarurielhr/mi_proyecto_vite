import { useState } from "react";
export const useCounter = () =>{
    const [valor, setValor] = useState(0);
    const acumular = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    setValor(valor + numeroAleatorio); // Resta el número aleatorio al valor actual
  console.log("se incremento:",numeroAleatorio);
};
    return{
        valor,acumular
    }

}