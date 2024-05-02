import SuperTokens from "supertokens-node";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import { middleware } from "supertokens-node/framework/express";
import { errorHandler } from "supertokens-node/framework/express";

SuperTokens.init({
  appInfo: {
    apiDomain: "...",
    appName: "...",
    websiteDomain: "...",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      // We have provided you with development keys which you can use for testing.
      // IMPORTANT: Please replace them with your own OAuth keys for production use.
      providers: [
        {
          config: {
            thirdPartyId: "google",
            clients: [
              {
                clientId:
                  "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                clientSecret: "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",
              },
            ],
          },
        },
        {
          config: {
            thirdPartyId: "github",
            clients: [
              {
                clientId: "467101b197249757c71f",
                clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
              },
            ],
          },
        },
        {
          config: {
            thirdPartyId: "apple",
            clients: [
              {
                clientId: "4398792-io.supertokens.example.service",
                additionalConfig: {
                  keyId: "7M48Y4RYDL",
                  privateKey:
                    "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                  teamId: "YWQCXGJRJL",
                },
              },
            ],
          },
        },
      ],
    }),
    // ...
  ],
});

let app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(errorHandler());

// IMPORTANT: CORS should be before the below line.
app.use(middleware());
