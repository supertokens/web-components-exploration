import { customElement } from "solid-element";
import EmailPassword from "./components/EmailPassword";
import Dashboard from "./dashboard/Dashboard";
import Shell from "./components/Shell";
import shellCss from "./components/Shell.css";

export function registerWebComponents() {
  customElement("st-email-password", {}, (props, { element }) => {
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(shellCss as string);

    element.navigate = (path: string) => {
      window.location.href = path; // Default behavior
    };

    const navigate = (path: string) => {
      element.navigate(path);
    };

    return () => {
      element.shadowRoot.adoptedStyleSheets = [stylesheet];
      return <EmailPassword navigate={navigate} />;
    };
  });
  customElement("st-dashboard", {}, (props, { element }) => {
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(shellCss as string);

    element.navigate = (path: string) => {
      window.location.href = path; // Default behavior
    };

    const navigate = (path: string) => {
      element.navigate(path);
    };

    return () => {
      element.shadowRoot.adoptedStyleSheets = [stylesheet];
      return <Dashboard navigate={navigate} />;
    };
  });
  customElement("st-shell", {}, (props, { element }) => {
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(shellCss as string);

    return () => {
      // Apply the stylesheet to the shadow DOM
      element.shadowRoot.adoptedStyleSheets = [stylesheet];
      return <Shell />;
    };
  });
}
