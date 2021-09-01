import { NavLink , Link , Switch , Route , BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import "./diseño.css"
import ItemDetail from "./kokemonItemDetail/ItemDetail"
import CategoriaKokemonContainer from "./CategoriaKokemon/CategoriaKokemonContainer";

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={ItemDetail} />
                    <Route path="/:TresPrimeros" component={CategoriaKokemonContainer}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App