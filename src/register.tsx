import { customElement } from "solid-element";
import EmailPassword from "./components/EmailPassword";
import Dashboard from "./dashboard/Dashboard";

function getInitialProps() {
  return {
    navigate: (path: string) => {
      window.location.href = path;
    },
  };
}

export function registerWebComponents() {
  customElement(
    "st-email-password",
    getInitialProps(),
    (props, { element }) => {
      const navigate = (path: string) => {
        if (element.navigate) {
          element.navigate(path);
        } else {
          window.location.href = path;
        }
      };

      return () => <EmailPassword navigate={navigate} />;
    }
  );
  customElement("st-dashboard", getInitialProps(), (props, { element }) => {
    const navigate = (path: string) => {
      if (element.navigate) {
        element.navigate(path);
      } else {
        window.location.href = path;
      }
    };

    return () => <Dashboard navigate={navigate} />;
  });
}
