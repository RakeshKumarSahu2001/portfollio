import { useState } from "react";
import "../App.css";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState("Home");

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    const handleNavItemClick = (itemName:string) => {
        setIsActive(itemName);
        if (window.innerWidth < 768) {
            setToggle(false);
        }
    };


    const navItems = [
        { name: "Home", href: "#Home" },
        { name: "About", href: "#Intro" },
        { name: "Skills", href: "#Skills" },
        { name: "Projects", href: "#Projects" },
        { name: "Education", href: "#Education" },
    ];

    return (
        <nav className="navbar nav-box navbar-expand-sm navbar-dark bg-dark z-3 position-fixed" style={{ height: "5rem", width: "100%" }} aria-label="Third navbar example">
            <div className="container nav-container">
                <a className="navbar-brand fs-3 fw-semibold" href="#">Rakesh.</a>

                <button className={`navbar-toggler ${!toggle && "collapsed"}`} type="button" onClick={handleToggle} data-bs-toggle="collapse" data-bs-target="#port-nav" aria-controls="port-nav" aria-expanded={toggle} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse link-box ${toggle && "show"}`} id="port-nav">
                    <ul className="navbar-nav ms-auto mb-2 mb-sm-0 d-flex gap-1">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.name} onClick={() => handleNavItemClick(item.name)}>
                                <a 
                                    className={`nav-link ${isActive === item.name ? "active" : ""}`}
                                    style={{
                                        fontSize: isActive === item.name ? "17px" : undefined,
                                        fontWeight: isActive === item.name ? 600 : undefined,
                                        color: isActive === item.name ? "#fff" : "#0057f0"
                                    }}
                                    href={item.href}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
