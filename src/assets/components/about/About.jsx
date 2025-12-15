import "./About.css";
import aboutImg from "./cuenta.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2 className="about__title">Sobre Nosotros</h2>

        <p className="about__paragraph">
          Somos un grupo de desarrolladores apasionados por la tecnología
          y la creación de soluciones digitales innovadoras.
        </p>

        <p className="about__paragraph">
          Nos especializamos en desarrollo web, diseño moderno y buenas
          prácticas de programación.
        </p>

        <button className="btn btn--light">
          Ver proyectos
        </button>
      </div>

      <figure className="about__figure">
        <img src={aboutImg} alt="Equipo de desarrollo" />
      </figure>
    </section>
  );
};

export default About;
