import '../css/Projets.css';

import img1 from './1.png'
export function Projets(){
    const projets = [
        {
            thumbnail: img1,
            description: "Mon premier projet",
        },
        {
            thumbnail: img1,
            description: "Mon deuxième projet",
        },
    ];

    return (
        <section id="projets">
            <h1 className="section-title">Mes projets</h1>

            <div className="projets-container">
                {projets.map((projet, index) => (
                    <div className="projet-card" key={index}>
                        <img
                            src={projet.thumbnail}
                            alt={projet.description}
                            className="projet-image"
                        />

                        <div className="projet-content">
                            <p>{projet.description}</p>

                            <div className="projet-buttons">
                                <button className="btn code">Code</button>
                                <button className="btn demo">Démo Live</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
