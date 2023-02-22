import { useLocation, useNavigate, useParams } from "react-router-dom";



const User = () => {
    const { momin } = useParams()
    const location = useLocation()
    const navigations = useNavigate()
    return (
        <>
            <h1>I am a User {momin}</h1>
            <p>My Current Location is {location.pathname}</p>
            {
                location.pathname === `/user/momin` ? <button onClick={() => navigations("/")}>go Home</button> : null
            }
        </>
    )
}
export default User;