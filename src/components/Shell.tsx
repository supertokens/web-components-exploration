import { noShadowDOM } from "solid-element";
import { JSXElement } from "solid-js";
import "./Shell.css";

interface Props {
  header?: JSXElement;
  children?: JSXElement;
  footer?: JSXElement;
}

function Shell(props: Props) {
  if (!import.meta?.env?.DEV) {
    noShadowDOM();
  }

  return (
    <div class="wrapper">
      <header>
        {!import.meta?.env?.DEV ? <slot name="header"></slot> : props.header}
      </header>
      <main>{!import.meta?.env?.DEV ? <slot></slot> : props.children}</main>
      <footer>
        Built by SuperTokens
        {!import.meta?.env?.DEV ? <slot name="footer"></slot> : props.footer}
      </footer>
    </div>
  );
}

export default Shell;
