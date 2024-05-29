import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import {
  registerComponent,
  COMPONENT_MAP,
  DEFAULT_PATHS,
} from "./components/routeMounter";

const PATH_OVERRIDE = {
  ...DEFAULT_PATHS,
  "email-password": "/",
};

const getRoutes = ({
  navigate,
  preBuiltUIList,
}: {
  navigate: (path: string) => void;
  preBuiltUIList: { tag: string; id: string }[];
  path?: string;
}) => {
  console.log(preBuiltUIList);

  preBuiltUIList.forEach((preBuiltUI) => {
    registerComponent({ navigate, preBuiltUI: preBuiltUI.id });
  });

  return preBuiltUIList.map((preBuiltUI) => {
    return (
      <Route
        path={PATH_OVERRIDE[preBuiltUI.id]}
        element={React.createElement(preBuiltUI.tag, null)}
        key={preBuiltUI.id}
      />
    );
  });
};

const Root = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      {getRoutes({
        navigate,
        preBuiltUIList: [COMPONENT_MAP.EMAIL_PASSWORD, COMPONENT_MAP.DASHBOARD],
      })}
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
