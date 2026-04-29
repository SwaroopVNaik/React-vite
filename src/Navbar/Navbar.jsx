let Navbar = ()=>{
    return <nav className = "navbar navbar-expand-lg px-3 py-4"
            style={{
                background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                backdropFilter: "blur(10px)"
            }} 
            >
                <a href="/index" className="navbar-brand d-flex align-item-center">
                <img src="https://media.designrush.com/inspiration_images/131943/conversions/_1511619616_823_Studio-Science-mobile.jpg" 
                alt="Logo" 
                width = "60"
                height = "60"
                className = "me-2"  
                />
                </a>
                <div className="ms-auto">
                    <ul className="navbar-nav fs-4">
                        <li><a href="/index" className="nav-link" style={{color: "white"}}>Home</a></li>
                        <li><a href="/about" className="nav-link" style={{color: "white"}}>About</a></li>
                        <li><a href="/services" className="nav-link" style={{color: "white"}}>Services</a></li>
                        <li><a href="/employees" className="nav-link" style={{color: "white"}}>Employees</a></li>
                        <li><a href="/Contact" className="nav-link" style={{color: "white"}}>Contact</a></li>
                    </ul>
                </div>
            </nav>
}

export default Navbar;