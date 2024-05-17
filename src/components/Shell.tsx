import { JSXElement } from "solid-js";
import "./Shell.css";

interface Props {
  header?: JSXElement;
  children?: JSXElement;
  footer?: JSXElement;
  useSlots?: boolean;
}

function Shell(props: Props) {
  const useSlots = props.useSlots;

  return (
    <div class="wrapper">
      <header>{useSlots ? <slot name="header"></slot> : props.header}</header>
      <main>{useSlots ? <slot></slot> : props.children}</main>
      <footer>
        Built by SuperTokens
        {useSlots ? <slot name="footer"></slot> : props.footer}
      </footer>
    </div>
  );
}

export default Shell;
