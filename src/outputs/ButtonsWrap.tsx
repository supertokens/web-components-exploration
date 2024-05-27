import { customElement, noShadowDOM } from "solid-element";
import shellCss from "../components/Shell.css";
import { type ComponentKeys } from "../register";
import Shell from "../components/Shell";

interface RoutePair {
  path: string;
  component: ComponentKeys;
}

export const load = async () => {
  customElement("st-social", {}, (props, { element }) => {
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(shellCss as string);

    return () => {
      noShadowDOM();
      element.shadowRoot.adoptedStyleSheets = [stylesheet];
      return (
        <Shell>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
              "justify-content": "center",
            }}
          >
            <button>Sign-in with Google</button>
            <button>Sign-in with Facebook</button>
            <button>Sign-in with Twitter</button>
            <button>Sign-in with Github</button>
          </div>
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
  Social: {
    load,
    generateRoutes,
  },
};
