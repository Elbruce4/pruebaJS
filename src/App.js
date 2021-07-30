import NavBar from "./navBar"
import Promesa from "./promesa"
import Productos from "./productos"

import "./diseño.css"
import Stock from "./stock"
import { useEffect, useState } from "react"
import "./productos.json"

const App = () =>{

    const [producto , setProducto] = useState(`algo `);

    console.log(producto);

    function verProducto () {
            
            let input = document.getElementById(`cantidad`);
            setProducto(input.value);
            console.log(producto);

    }

    return (<div id="app">
                <div className="cabecera"> 
                    <h1>Página para practicar React JS</h1>
                    
                </div>
                <div className="cuerpo">
                    
                    <input type="text" title="Indique cuanto Stock habrá disponible" id="cantidad" />
                    <button onClick={verProducto}>Presione</button>
                    <div className="productos">
                        <Productos nombreProducto = {producto} test />
                    </div>

                </div>
                
            </div>
    )
}

export default App