import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav-container">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <button>Login</button>
            <button>Register</button>
        </ul>
        
    </div>
  )
}

export default Navbar