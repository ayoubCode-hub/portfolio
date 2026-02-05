import '../css/competences.css';

export function Competences() {

const competences = {
    FrontEnd: [
        { competence: 'HTML', pourcentage: 90 },
        { competence: 'CSS', pourcentage: 80 },
        { competence: 'JavaScript', pourcentage: 70 }
    ],
    BackEnd: [
        { competence: 'PHP', pourcentage: 70 },
        { competence: 'Python', pourcentage: 70 },
        { competence: 'POO', pourcentage: 70 }
    ],
    Autres: [
        { competence: 'SQL', pourcentage: 90 },
        { competence: 'NoSQL', pourcentage: 90 }
    ],
    OutilsDev: [
        { competence: 'Git', pourcentage: 80 },
        { competence: 'GitHub', pourcentage: 90 },
        { competence: 'VS Code', pourcentage: 90 }
    ],
    Bureautique: [
        { competence: 'PowerPoint', pourcentage: 85 },
        { competence: 'Word', pourcentage: 90 },
        { competence: 'Excel', pourcentage: 85 }
    ]
};

return (
    <section id="compétences">
        <h2 className='section-title'>Mes compétences </h2>
        <div className="competences">

            {Object.entries(competences).map(([categorie, skills]) => (
                <div className="card" key={categorie}>

                    <h3 className="card-title">{categorie}</h3>

                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <span className="competence">{skill.competence}</span>
                            <span className="pourcentage">{skill.pourcentage}%</span>

                           <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${skill.pourcentage}%` }}
                                ></div>
                            </div>

                        </div>
                    ))}

                </div>
            ))}

        </div>
    </section>
);
}
