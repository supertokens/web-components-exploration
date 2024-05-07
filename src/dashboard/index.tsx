/* @refresh reload */
import { render } from "solid-js/web";

import "../index.css";
import Dashboard from "./Dashboard";

const root = document.getElementById("root");

render(() => <Dashboard />, root!);
