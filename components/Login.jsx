import styles from "./Login.module.css";
import { useState, useEffect } from "react";
const Login = () => {
  const [msg, setMsg] = useState("default");

  async function chk(mail, password) {
    const url = "http://localhost:5001/user/login";
    const payload = {
      mail: mail,
      password: password,
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Sec-Fetch-Mode": "cors",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setMsg("Cannot login");
      }
      const data = await res.json();
      // console.log("res is", data);
      setMsg("Logged in");
      return [true,data];
    } catch (e) {
      console.log("Inside error handler react");
      setMsg("Cannot login");
      return [false,null];
    }
    return true;
  }

  async function check(e) {
    e.preventDefault();
    setMsg("trying to log in");
    localStorage.removeItem("token");
    const data = new FormData(e.target);
    const [[_, mail], [__, password]] = data;
    console.log("mail and pass are:-> ", mail, password);
    let [isLogged, bearer] = await chk(mail, password);
    if (isLogged) {
      console.log("user logged in from react frontend", bearer);

      localStorage.setItem("token", bearer);
      setTimeout(() => {
        const token = localStorage.getItem("token");
        console.log("token is ", token);
      }, 2000);
      window.location.href = '/cart';
    }
    
  }
  return (
    <div className={styles.outer}>
      <div className={styles.frm}>
        <form onSubmit={check}>
          <label for="mail">Email:</label>
          <br />
          <input name="mail" type="email" />
          <br />
          <label for="password">Password:</label>
          <br />
          <input name="password" type="text" />
          <br />
          <button type="submit">login</button>
          <div>{msg}</div>
        </form>
      </div>
    </div>
  );
};
export default Login;
