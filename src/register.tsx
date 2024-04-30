import { customElement } from "solid-element";
import EmailPassword from "./components/EmailPassword";

function getInitialProps() {
  return {
    message: "I'm a web component bruh!",
  };
}

export function registerWebComponents() {
  customElement("email-password", getInitialProps(), EmailPassword);
}
