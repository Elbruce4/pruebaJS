import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"

const CategoriaKokemonContainer = () => {



    const [charmander , setCharmander] = useState("cargando...")
    const [squirtle , setSquirte] = useState("cargando...")
    const [bulbasaur , setBulbasaur] = useState("cargando...")


    useEffect(()=>{

        fetch("https://pokeapi.co/api/v2/pokemon/charmander").then(res=>res.json()).then(json=>setCharmander(json))

        fetch("https://pokeapi.co/api/v2/pokemon/squirtle").then(res=>res.json()).then(json=>setSquirte(json))


        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then(res=>res.json()).then(json=>setBulbasaur(json))

        

    },[])

    //console.log(charmander.forms[0].url)

    /*
            <div className="charmander">
                <p>{charmander.name}</p>
                <img src={charmander.sprites.front_default}/>
            </div>
            <div className="squirtle">
                <p>{squirtle.name}</p>
                <img src={squirtle.sprites.front_default}/>
            </div>
            <div className="bullbasor">
                <p>{bulbasaur.name}</p>
                <img src={bulbasaur.sprites.front_default}/>
            </div> */

    return (
        <div>
            <div className="charmander">
                <p>{charmander.name}</p>
                <img src={charmander.sprites.front_default}/>
            </div>
            <div className="squirtle">
                <p>{squirtle.name}</p>
                <img src={squirtle.sprites.front_default}/>
            </div>
            <div className="bullbasor">
                <p>{bulbasaur.name}</p>
                <img src={bulbasaur.sprites}/>
            </div>
        </div>

    )

}

export default CategoriaKokemonContainer