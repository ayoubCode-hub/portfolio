import '../css/Contacts.css';

export function Contacts() {
  const contacts = [
    {
      icon: <i className="fa-solid fa-envelope"></i>,
      title: 'Envoyez-moi un email',
      description: 'Je réponds généralement dans les 24 heures',
      btn: <a href="mailto:afkira789@email.com">Ecrire</a>
    },
    {
      icon: <i className="fa-solid fa-phone"></i>,
      title: 'Appelez-moi',
      description: 'Disponible du lundi au vendredi, 9h-18h',
      btn: <a href="tel:+212714082954">+212 714082954</a>
    },
    {
      icon: <i className="fa-solid fa-user"></i>, // juste pour le header
      title: 'Réseaux sociaux',
      description: 'Connectons-nous sur les plateformes professionnelles',
      btn: (
        <>
          <a href="https://github.com/ayoubCode-hub" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ayoub-afkir-263823246" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </>
      )
    }
  ];

  return (
    <section id="contacts">
      <h1>Me contacter</h1>
      <div className="contacts-container">
        {contacts.map((cntc, index) => (
          <div className="contact-card" key={index}>
            <div className="contact-icon">{cntc.icon}</div>
            <div className="card-title">{cntc.title}</div>
            <div className="card-text">{cntc.description}</div>
            <div className="card-btn">{cntc.btn}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
