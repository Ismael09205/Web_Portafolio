import './Project.css';

import portfolio1 from './port1.jpg';
import portfolio2 from './port2.jpg';

const Project = () => {
    return (
        <section className="project" id="project">
            <h3 className="project__title">Projects</h3>
            
            <div className="project__cards">
                
                <div className="cards">
                    <img src={portfolio1} className="card__img" alt="medifast" />
                    <div className="card">
                        <h4 className="card__title">Medifast</h4>
                        <p className="card__description">Tu salud siempre la la vuelta de la esquina.</p>
                        <div className="card__buttons">
                            <a href="#" className="card__category">Repository</a>
                            <a href="#" className="card__category">Demo</a>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <img src={portfolio2} className="card__img" alt="Portfolio" />
                    <div className="card">
                        <h4 className="card__title">Portfolio</h4>
                        <p className="card__description">Proyectos par mostrar nuestras habilidades.</p>
                        <div className="card__buttons">
                            <a href="#" className="card__category">Repository</a>
                            <a href="#" className="card__category">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;