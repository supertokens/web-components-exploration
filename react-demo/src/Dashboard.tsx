import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { load } from "./components/dashboard";

function Dashboard() {
  const dashboardRef = useRef(null);
  const navigate = useNavigate(); // Hook to get the navigate function

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    const dashboardElement = dashboardRef.current;
    if (dashboardElement) {
      (dashboardElement as HTMLElement).navigate = (path: string) => {
        console.log("RR Navigate to:", path);
        navigate(path); // Navigate using React Router
      };
    }

    return () => {
      if (dashboardElement) {
        (dashboardElement as HTMLElement).navigate = null; // Clean up the navigate property
      }
    };
  }, [navigate]);

  return (
    <st-dashboard ref={dashboardRef} className="st-dashboard"></st-dashboard>
  );
}

export default Dashboard;
