import { customElement, noShadowDOM } from "solid-element";
import { lazy } from "solid-js";
// import EmailPassword from "./components/EmailPassword";
// import Dashboard from "./dashboard/Dashboard";
// import Shell from "./components/Shell";
import shellCss from "./components/Shell.css";

const componentMap = {
  "st-email-password": () => {
    customElement("st-email-password", {}, (props, { element }) => {
      const EmailPassword = lazy(() => import("./components/EmailPassword"));
      const stylesheet = new CSSStyleSheet();
      stylesheet.replaceSync(shellCss as string);

      element.navigate = (path: string) => {
        window.location.href = path; // Default behavior
      };

      const navigate = (path: string) => {
        element.navigate(path);
      };

      return () => {
        noShadowDOM();
        element.shadowRoot.adoptedStyleSheets = [stylesheet];
        return <EmailPassword navigate={navigate} />;
      };
    });
  },
  "st-dashboard": () => {
    customElement("st-dashboard", {}, (props, { element }) => {
      const Dashboard = lazy(() => import("./dashboard/Dashboard"));
      const stylesheet = new CSSStyleSheet();
      stylesheet.replaceSync(shellCss as string);

      element.navigate = (path: string) => {
        window.location.href = path; // Default behavior
      };

      const navigate = (path: string) => {
        element.navigate(path);
      };

      return () => {
        noShadowDOM();
        element.shadowRoot.adoptedStyleSheets = [stylesheet];
        return <Dashboard navigate={navigate} />;
      };
    });
  },
  "st-shell": () => {
    customElement("st-shell", {}, (props, { element }) => {
      const Shell = lazy(() => import("./components/Shell"));
      const stylesheet = new CSSStyleSheet();
      stylesheet.replaceSync(shellCss as string);

      return () => {
        noShadowDOM();
        element.shadowRoot.adoptedStyleSheets = [stylesheet];
        return <Shell useSlots />;
      };
    });
  },
};

export type ComponentKeys = keyof typeof componentMap;

export function registerWebComponents(key: keyof typeof componentMap) {
  return componentMap[key]();
}
