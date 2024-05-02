import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import EmailPassword from "supertokens-web-js/recipe/emailpassword";

SuperTokens.init({
  appInfo: {
    apiDomain: "http://localhost:3000",
    apiBasePath: "/api/auth",
    appName: "WC-test",
  },
  recipeList: [Session.init(), EmailPassword.init()],
});