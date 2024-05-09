import Session from "supertokens-web-js/recipe/session";
import { superTokensInit } from "../config/frontend";
import { Show, createEffect, createSignal } from "solid-js";
import { noShadowDOM } from "solid-element";

superTokensInit();

function Dashboard({ navigate }: { navigate?: (path: string) => void }) {
  if (!import.meta?.env?.DEV) {
    noShadowDOM();
  }

  if (navigate === undefined) {
    navigate = (path: string) => {
      window.location.href = path;
    };
  }

  const [loading, setLoading] = createSignal(true);

  const getSessionInfo = async () => {
    const response = await fetch("http://localhost:3001/sessioninfo", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();

    alert(JSON.stringify(data));
  };

  async function signOut() {
    await Session.signOut();
    navigate?.("/");
  }

  createEffect(async () => {
    if (await Session.doesSessionExist()) {
      setLoading(false);
    } else {
      navigate?.("/");
    }
  });

  return (
    <div>
      <h2 style={{ "text-align": "center" }}>Dashboard</h2>
      <div class="form-wrap" part="st-dashboard">
        <Show when={loading()}>Loading...</Show>
        <Show when={!loading()}>
          <button onClick={getSessionInfo}>Session Info</button>
          <button onClick={signOut}>Sign Out</button>
        </Show>
      </div>
    </div>
  );
}

export default Dashboard;
