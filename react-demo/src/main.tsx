import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import { registerComponent } from "./components/routeMounter";

const getRoutes = ({
  navigate,
  preBuiltUIList,
  path,
}: {
  navigate: (path: string) => void;
  preBuiltUIList: string[];
  path?: string;
}) => {
  preBuiltUIList.forEach((preBuiltUI) => {
    registerComponent({ navigate, preBuiltUI });
  });

  return [
    <Route
      path="/"
      element={<st-email-password></st-email-password>}
      key="root"
    />,
    <Route path="/dashboard" element={<st-dashboard />} key="dashboard" />,
  ];
};

const Root = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      {getRoutes({ navigate, preBuiltUIList: ["email-password", "dashboard"] })}
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
