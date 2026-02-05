import '../css/Footer.css';

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        
        {/* Section gauche : Présentation */}
        <div className="footer-left">
          <h2>AYOUB AFKIR</h2>
          <p>Développeur Full Stack passionné par la création d'expériences web modernes et performantes.</p>
          <p className="copyright">© {new Date().getFullYear()} Ayoub Afkir. Tous droits réservés.</p>
          <p className="made-with">Conçu avec passion 💙</p>
        </div>

        {/* Section centrale : Navigation rapide */}
        <div className="footer-center">
          <h3>Navigation</h3>
          <ul className="footer-nav">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#a-propos">À propos</a></li>
            <li><a href="#compétences">Compétences</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contacts">Contact</a></li>
          </ul>
        </div>

        {/* Section droite : Contact */}
        <div className="footer-right">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>afkira789@gmail.com</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+212 714082954</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Oujda, Maroc</span>
            </li>
          </ul>
          
          <div className="social-links">
            <a href="https://github.com/ayoubCode-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ayoub-afkir-263823246" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}