import "../css/Navbar.css";

export function Navbar() {
  const menuItems = [
    "Accueil",
    "A propos",
    "Compétences",
    // "Certification",
    //"Projets",
    "Contacts",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top custom-navbar">
      <div className="container">

        {/* Logo */}
       

        {/* Burger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}
