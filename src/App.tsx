import "./App.css";
import EmailPassword from "./components/EmailPassword";
import { superTokensInit } from "./config/frontend";

superTokensInit();

function App() {
  return (
    <>
      <h1 style={{ "font-size": "2em" }}>
        SuperTokens <br /> WebComponents demo
      </h1>
      <div>
        <EmailPassword />
      </div>
    </>
  );
}

export default App;
