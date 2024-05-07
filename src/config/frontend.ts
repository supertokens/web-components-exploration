import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";

export const superTokensInit = () => {
  SuperTokens.init({
    appInfo: {
      apiDomain: "http://localhost:3001",
      apiBasePath: "",
      appName: "WC Test",
    },
    recipeList: [Session.init(), ThirdPartyEmailPassword.init()],
  });
};
