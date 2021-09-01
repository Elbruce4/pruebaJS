import Card from "./Card"
import { NavLink } from "react-router-dom"

const NavBar = () => {

    return (

        <div className="NavBar">
            <NavLink to="/">
                <h1>Kokemon Store</h1>
                <h4>Acá vas a encontrar el Kokemon que siempre quisiste y nunca te dejaron tener</h4>
            </NavLink>
            <Card />
        </div>
    )
}

export default NavBar