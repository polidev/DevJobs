import "/src/pages/login.css";

function Login() {
  return (
    <>
      <div className="login">
        <h1>Log In</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
}

export default Login;
