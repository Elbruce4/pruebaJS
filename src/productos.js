import { useState } from "react";

const Productos = ({nombreProducto}) =>{

    console.log(nombreProducto);

    const [variable , setVariable] = useState(``)

const data = [{
        "id": 1,
        "nombre_producto": "Granite",
        "precio": 1116,
        "stock": 5
      }, {
        "id": 2,
        "nombre_producto": "Aluminum",
        "precio": 1598,
        "stock": 9
      }, {
        "id": 3,
        "nombre_producto": "Plexiglass",
        "precio": 1690,
        "stock": 1
      }, {
        "id": 4,
        "nombre_producto": "Plastic",
        "precio": 1532,
        "stock": 1
    }]

    /*const productoElegido = data.find(obj => obj.nombre_producto.includes(nombreProducto));

    if (productoElegido) {
        setVariable(productoElegido)
        
      } else {
        console.log(`No coincide ningún nombre`);
      } */
    return(
        <>       
            <p>{variable}</p>
        </>
    );
}

export default Productos