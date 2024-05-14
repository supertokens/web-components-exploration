import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./components/widget.mjs";

function App() {
  const navigate = useNavigate();
  const emailPasswordRef = useRef(null);

  useEffect(() => {
    const emailPasswordElement = emailPasswordRef.current;
    if (emailPasswordElement) {
      (emailPasswordElement as HTMLElement).navigate = (path: string) => {
        console.log("RR navigate to:", path);
        navigate(path);
      };
    }

    return () => {
      if (emailPasswordElement) {
        (emailPasswordElement as HTMLElement).navigate = null;
      }
    };
  }, [navigate]);

  return (
    <st-shell>
      <div slot="header">
        <h1>SuperTokens WebComponents Test</h1>
      </div>
      <st-email-password
        className="st-email-password"
        ref={emailPasswordRef}
      ></st-email-password>
    </st-shell>
  );
}

export default App;
