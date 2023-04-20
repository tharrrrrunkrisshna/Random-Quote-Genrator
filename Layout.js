// import { Link,Outlet } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import './Navbar.css';
// const Layout = () => {
//   return (
//     <div className="links">
//       <Nav>
//           <ul>
//             <li>
//             <Link to="/">Home</Link>
//             </li>
//             <li>
//             <Link to="/quote">Quote</Link>
//             </li>
//             <li>
//             <Link to="/fav">Fav</Link>
//             </li>
//           </ul>
//           </Nav>
//           <Outlet/>
//     </div>

//   )
// };

// export default Layout;
import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'
import { useState,useEffect } from 'react'


function Navbar() {
   const[expandNavbar,setExpandNavbar] = useState(false);
   
   const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    },[location] )

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close" }>
        <div className='toggleButton'>
            <button onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}>
                <ReorderIcon/>
            </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to="/quote">Quote</Link>
            <Link to="/fav">Fav</Link>
        </div>
    </div>

  )
}

export default Navbar