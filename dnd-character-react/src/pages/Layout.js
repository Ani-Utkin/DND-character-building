import {Link, Outlet} from "react-router-dom";

const Layout = () =>{
    return(
        <>
        <nav>
          <h1 style={{ textAlign:'center' }}><Link to="/">DND Character Build</Link></h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="Create">Create Character</Link></li>
            <li><Link to="CharacterList">My Characters</Link></li>
          </ul>
        </nav>
        <Outlet />
        </>
    );
}

export default Layout;