import { lazy } from "solid-js";
import Shell from "../components/Shell";
import { customElement, noShadowDOM } from "solid-element";
import shellCss from "../components/Shell.css";

type PreBuiltUIList = "dummy" | "email-password" | "fakesocial" | "dashboard";
type NavigateFunction = (path: string) => void;

interface RouteMounterProps {
  navigate?: NavigateFunction;
  preBuiltUI: PreBuiltUIList;
  path?: string;
}

const DEFAULT_PATHS = {
  "email-password": "/auth",
  fakesocial: "/social",
  dummy: "/dummy",
  dashboard: "/dashboard",
};

// Register components
export function registerComponent({ navigate, preBuiltUI }: RouteMounterProps) {
  console.log("registering", preBuiltUI);

  if (preBuiltUI === "email-password") {
    customElement("st-email-password", {}, (props, { element }) => {
      console.log("registering email-password component");
      const EmailPassword = lazy(() => import("../components/EmailPassword"));
      const stylesheet = new CSSStyleSheet();
      stylesheet.replaceSync(shellCss as string);

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
  }

  if (preBuiltUI === "fakesocial") {
    customElement("st-social", {}, (props, { element }) => {
      console.log("registering social component");
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
  }

  if (preBuiltUI === "dashboard") {
    customElement("st-dashboard", {}, (props, { element }) => {
      console.log("registering dashboard component");
      const Dashboard = lazy(() => import("../dashboard/Dashboard"));
      const stylesheet = new CSSStyleSheet();
      stylesheet.replaceSync(shellCss as string);

      return () => {
        noShadowDOM();
        element.shadowRoot.adoptedStyleSheets = [stylesheet];
        return (
          <Shell>
            <Dashboard navigate={navigate} />
          </Shell>
        );
      };
    });
  }

  if (preBuiltUI === "dummy") {
    customElement("st-dummy", {}, (props, { element }) => {
      console.log("registering dummy component");
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
  }
}

// Mount at page, we don't care about route
export const staticMount = ({
  targetElement,
  navigate,
  preBuiltUI,
}: {
  targetElement: string;
  navigate?: NavigateFunction;
  preBuiltUI: PreBuiltUIList;
}) => {
  console.log("mounting", preBuiltUI, "at", targetElement);
  console.log("navigate", navigate);
  registerComponent({ navigate, preBuiltUI });
  console.log("registerComponent done");
  const component = `<st-${preBuiltUI} class="${preBuiltUI}"></st-${preBuiltUI}>`;
  document
    .querySelector(targetElement)
    // Can't use document.createElement, because it doesn't trigger connectedCallback (which is needed for a web component to be mounted properly)
    ?.insertAdjacentHTML("beforeend", component);
};

// Mount assuming an SPA, return an object with an element function to mount
export const universalClientSideMount = (
  RoutePairs: { path?: string; preBuiltUI: PreBuiltUIList }[],
  navigate: NavigateFunction,
  callback: (element: string) => void
) => {
  RoutePairs.forEach((route) => {
    registerComponent({ navigate, preBuiltUI: route.preBuiltUI });
  });
  return RoutePairs.map((route) => {
    return {
      element: () => {
        const component = `<st-${route.preBuiltUI} class="${route.preBuiltUI}"></st-${route.preBuiltUI}>`;
        return callback(component);
      },
      path: route.path || DEFAULT_PATHS[route.preBuiltUI],
    };
  });
};

(window as any).ST = (window as any).ST || {};

(window as any).ST.registerComponent = registerComponent;
(window as any).ST.staticMount = staticMount;
(window as any).ST.universalClientSideMount = universalClientSideMount;
