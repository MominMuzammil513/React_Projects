import './Header.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Search from './Search';
import User from './User';
import Menu from './Menu';
import Url from './Url';
import Error from './Error';


const Header = () => {
    return (
        <>
            {/* <h1>I am a Header</h1> */}
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/search' element={<Search />} />
                <Route exact={true} path='/user' element={<User />} />
                <Route path='/user/:momin' element={<User />} />
                <Route path='/Url' element={<Url />} />
                {/* <Route path='*' element={<Error />} /> for 404 error */}
                <Route path='*' element={<Home />} />
                /**for redirection page in home */
            </Routes>
        </>
    )
}
export default Header;