import styles from "./Login.module.css";
import { useState } from "react";
const Login = () => {
  const [msg, setMsg] = useState("");

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
        setMsg("Can not login");
        return;
      }
      
      setMsg("Loggin in...");
    } catch (e) {
      console.log("inside errror handler react");
      setMsg("Can not login");
      return;
    }
  }
  async function check(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const [[_, mail], [__, password]] = data;
    console.log(mail, password);
    setMsg(await chk(mail, password));
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
