import { Input } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="center">
          <form action="" className="form center">
            <img src="images/avatar.png" alt="" />
            Register
            <h2>Login</h2>
            <div>
              <label className="custome-lable">
                User Name:
                <Input type="text" name="loginUser" id="loginUser" />
              </label>
            </div>
            <div>
              <label className="custome-lable">
                Password:
                <Input
                  type="password"
                  name="loginPassword"
                  id="loginPassword"
                  required
                />
              </label>
            </div>
            <Input type="submit" value="Login" className="submit-btn" />
          </form>
          <div id="forgot-pw">
            <form action="" className="form center">
              <a href="#" className="close">
                &times;
              </a>
              <h2>Reset Password</h2>
              <div className="input-group">
                <Input type="email" name="email" id="email" required />
                <label for="email">Email</label>
              </div>
              <Input type="submit" value="Submit" className="submit-btn" />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
