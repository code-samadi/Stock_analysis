import react from 'react';
import '../Style/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">MyApp</div>
            <ul className="navbar-menu">
                <li> Home</li>
                <li> Tools</li>
                <li className="dropdown">
                    <span>Options ▼</span>
                    <ul className="dropdown-menu">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;