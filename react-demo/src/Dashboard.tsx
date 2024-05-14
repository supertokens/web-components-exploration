import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const dashboardRef = useRef(null);
  const navigate = useNavigate(); // Hook to get the navigate function

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
    <st-shell>
      <div slot="header">
        <h1>SuperTokens WebComponents Test</h1>
      </div>
      <st-dashboard ref={dashboardRef} className="st-dashboard"></st-dashboard>
    </st-shell>
  );
}

export default Dashboard;
