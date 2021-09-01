import { useEffect, useState } from "react"
import Item from "./Item.js"

const ItemDetail = () => {

    const [cantidadKokemon , setCantidadKokemon ] = useState([])
    const [arrayKokemones , setArrayKokemones] = useState([])


    useEffect (()=>{   

        const pokeApi = fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
        pokeApi.then(res=>res.json()).then(json=>setCantidadKokemon(json))//.then(koke=>setArrayKokemones(koke))

        //setArrayKokemones(cantidadKokemon.results)
    
    },[])

    //setArrayKokemones(cantidadKokemon.results)
    console.log(arrayKokemones)
    /*
            {
                cantidadKokemon.results.map(obj=>
                    <Item data={obj} />)
                } */

    return (

        <div>
            <p>¿Sabias que la cantidad de Kokemones hasta hoy es de {cantidadKokemon.count}?</p>
            
        </div>

    )
}

export default ItemDetail