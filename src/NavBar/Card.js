import { NavLink } from "react-router-dom"

const Card = () => {

    return (
        <div className="Card">
            <NavLink to="/TresPrimeros">
                <p>Los tres iniciales</p>
            </NavLink>
            <NavLink to="/Fuerza">
                <p>Por Fuerza</p>
            </NavLink>
            <NavLink to="/Generacion">
                <p>Por generación</p>
            </NavLink>
        </div>  
    )
}

export default Card