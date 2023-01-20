import { Link } from "react-router-dom"

function Header (props) {
    return (
        <nav className="nav"> <h1>Component Name</h1>)
            <Link to="/">
                <div>Cheeses</div>
            </Link>
        </nav>
    )
}
  
  export default Header