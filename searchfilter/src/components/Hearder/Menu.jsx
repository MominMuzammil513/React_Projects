
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="menu-div">
                {/* <h1>I am Menu</h1> */}
                <NavLink to={"/"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>Home</NavLink>
                <NavLink to={"/services"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>Services</NavLink>
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>AboutUs</NavLink>
                <NavLink to={"/search"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>Search</NavLink>
                <NavLink to={"/user"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>User</NavLink>
                <NavLink to={"/url"} className={({ isActive }) => isActive ? "active-style" : "dis-active"}>url</NavLink>
            </div>
        </>
    )
}
export default Menu;