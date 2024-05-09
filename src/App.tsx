// import "./App.css";
import EmailPassword from "./components/EmailPassword";
import Shell from "./components/Shell";
import { superTokensInit } from "./config/frontend";

superTokensInit();

function App() {
  return (
    <Shell
      header={
        <h2 style={{ "text-align": "center" }}>
          SuperTokens WebComponents Demo
        </h2>
      }
    >
      <div>
        <h2 style={{ "text-align": "center" }}>Log-in page</h2>
        <EmailPassword />
      </div>
    </Shell>
  );
}

export default App;
