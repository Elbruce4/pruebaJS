import { useState } from "react";



const Stock = (stock) => {

    const [mensaje , setMensaje] = useState(`hay stock`)
        
    const [contador , setContador] = useState(1)

    console.log(contador);

    function aumentarEnUno () {
        setContador (contador + 1);
        console.log(contador);
        console.log(stock.stock);
        if (stock.stock > contador) {
            setMensaje(`Hay stock ` + (stock.stock - contador));
        } else {
            setMensaje (`No hay stock`)
        }
    }

    function aumentarEnDos () {
        setContador(contador - 1);
        console.log(contador);
        console.log(stock.stock);
        if (stock.stock > contador) {
            setMensaje(`Hay stock ` + (stock.stock - contador));
        } else {
            setMensaje(`No hay stock`);
        }
    }

    return (
                <>
                {contador}
                <button onClick={aumentarEnUno}>+1</button>
                <button onClick={aumentarEnDos}>-1</button>
                {mensaje}
                </>
            );

}
export default Stock