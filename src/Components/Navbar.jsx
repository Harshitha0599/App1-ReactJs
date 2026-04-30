import {Link,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'

function Navbar () {
    return (
        <>
            <nav>
                <Link to ="/Home">Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Contact">Contact</Link>
                <Link to ="/Login">Login</Link>
            </nav>

            <Routes>
                <Route path ="/" element={<Home />}/>
                <Route path ="/Home" element = {<Home />}/>
                <Route path ="/About" element={<About />}/>
                <Route path ="/Contact" element={<Contact />}/>
                <Route path ="/Login" element={<Login />}/>
            </Routes>
        </>
    )
}
export default Navbar;
