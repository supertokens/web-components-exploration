/* @refresh reload */
import { render } from "solid-js/web";

import "../index.css";
import Dashboard from "./Dashboard";
import Shell from "../components/Shell";

const root = document.getElementById("root");

render(
  () => (
    <Shell header={<h2>SuperTokens WebComponents demo</h2>}>
      <Dashboard />
    </Shell>
  ),
  root!
);
