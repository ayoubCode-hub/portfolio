import '../css/Accueil.css';

export function Accueil() {
  return (
    <section id="accueil">
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-6">
            <p id='disponible'>
                <span className="dot"></span>
                Disponible pour un stage
            </p>

            <p className="salutation">Bonjour, je suis</p>
            <h1 className="nom">AFKIR Ayoub</h1>
            <p>Développeur Web Full Stack</p>

            {/* Button Télécharger CV */}
            <a href="/logo/cv.pdf" download>
              <button className="btn-cv">
                <i className="fa-solid fa-download"></i> Télécharger CV
              </button>
            </a>

            {/* Button Me contacter */}
            <button
              className="btn-contact"
              onClick={() => {
                const contactSection = document.getElementById('contacts');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Me contacter
            </button>
          </div>

          <div className="col-12 col-md-6">
             <img src='../logo/OIP.jpg' alt='logo oip'/>
          </div>

        </div>
      </div>
    </section>
  );
}
