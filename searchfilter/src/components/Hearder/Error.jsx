
import { NavLink } from "react-router-dom";
const Error = () => {
    return (
        <>
            <h1>404 Error Page</h1>
            <h1>Sorry, This Page doesn't exist</h1>
            <NavLink to="/"> Go Back </NavLink>
        </>
    )
}
export default Error;