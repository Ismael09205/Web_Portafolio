
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <form className="login__form">
        <h2 className="login__title">Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="login__input"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="login__input"
        />

        <button className="login__button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
