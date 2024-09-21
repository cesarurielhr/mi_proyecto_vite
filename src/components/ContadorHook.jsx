import { useCounter } from "./hook/useCounter";
export const ContadorHook = () => {

    const {valor, acumular} = useCounter(0);
    return (
        <div>
           
            <h2>
                Contador Hook: {valor}
            </h2>

            <button onClick={()=> acumular(1)}>Incremenar Aletoriamente</button> 
        </div>
    )
};