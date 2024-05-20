import { customElement, noShadowDOM } from "solid-element";
import shellCss from "../components/Shell.css";
import { type ComponentKeys } from "../register";
import EmailPassword from "../components/EmailPassword";
import Shell from "../components/Shell";

interface RoutePair {
  path: string;
  component: ComponentKeys;
}

export const load = () => {
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
      noShadowDOM();
      element.shadowRoot.adoptedStyleSheets = [stylesheet];
      return (
        <Shell>
          <EmailPassword navigate={navigate} />
        </Shell>
      );
    };
  });
};

export const generateRoutes = (routePairs: RoutePair[]) => {
  console.log("stub for router");
  console.log(routePairs);
};

(window as any).ST = (window as any).ST || {};

(window as any).ST = {
  ...(window as any).ST,
  EmailPassword: {
    load,
    generateRoutes,
  },
};
