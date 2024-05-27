import { customElement, noShadowDOM } from "solid-element";
import shellCss from "../components/Shell.css";
import { type ComponentKeys } from "../register";
import Shell from "../components/Shell";

interface RoutePair {
  path: string;
  component: ComponentKeys;
}

export const load = async () => {
  customElement("st-dummy", {}, (props, { element }) => {
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(shellCss as string);

    return () => {
      noShadowDOM();
      element.shadowRoot.adoptedStyleSheets = [stylesheet];
      return (
        <Shell>
          <div>I'm a dummy component</div>
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
  Dummy: {
    load,
    generateRoutes,
  },
};
