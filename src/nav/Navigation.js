import { NavLink } from 'react-router-dom';

const Navigation =() => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Pool
            </NavLink>
            <NavLink exact to="/farms" activeClassName="nav-active">
                Farms
            </NavLink>
            <NavLink exact to="/blindbox" activeClassName="nav-active">
                Blind Box
            </NavLink>
        </div>
    )
}

export default Navigation;