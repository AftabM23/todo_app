import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Login.module.css";
import Logo from "../assets/logo1.png";
function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/notes");
  };
  return (
    <div className={styles.login}>
      <form>
        <img src={Logo} alt="Company logos"></img>
        <span>
          <input type="text" placeholder="Username" />
        </span>
        <span>
          <input type="password" placeholder="Password" />
        </span>

        <Button onClick={handleLogin} type="login">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
