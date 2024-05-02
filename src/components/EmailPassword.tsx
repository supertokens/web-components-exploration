import { createSignal } from "solid-js/types/server/reactive.js";
import { emailPasswordSignUp } from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { doesEmailExist } from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { emailPasswordSignIn } from "supertokens-web-js/recipe/thirdpartyemailpassword";

async function signUpClicked(email: string, password: string) {
  try {
    let response = await emailPasswordSignUp({
      formFields: [
        {
          id: "email",
          value: email,
        },
        {
          id: "password",
          value: password,
        },
      ],
    });

    if (response.status === "FIELD_ERROR") {
      // one of the input formFields failed validaiton
      response.formFields.forEach((formField) => {
        if (formField.id === "email") {
          // Email validation failed (for example incorrect email syntax),
          // or the email is not unique.
          window.alert(formField.error);
        } else if (formField.id === "password") {
          // Password validation failed.
          // Maybe it didn't match the password strength
          window.alert(formField.error);
        }
      });
    } else if (response.status === "SIGN_UP_NOT_ALLOWED") {
      // the reason string is a user friendly message
      // about what went wrong. It can also contain a support code which users
      // can tell you so you know why their sign up was not allowed.
      window.alert(response.reason);
    } else {
      // sign up successful. The session tokens are automatically handled by
      // the frontend SDK.
      window.location.href = "/homepage";
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}

async function checkEmail(email: string) {
  try {
    let response = await doesEmailExist({
      email,
    });

    if (response.doesExist) {
      window.alert("Email already exists. Please sign in instead");
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}

async function signInClicked(email: string, password: string) {
  try {
    let response = await emailPasswordSignIn({
      formFields: [
        {
          id: "email",
          value: email,
        },
        {
          id: "password",
          value: password,
        },
      ],
    });

    if (response.status === "FIELD_ERROR") {
      response.formFields.forEach((formField) => {
        if (formField.id === "email") {
          // Email validation failed (for example incorrect email syntax).
          window.alert(formField.error);
        }
      });
    } else if (response.status === "WRONG_CREDENTIALS_ERROR") {
      window.alert("Email password combination is incorrect.");
    } else if (response.status === "SIGN_IN_NOT_ALLOWED") {
      // the reason string is a user friendly message
      // about what went wrong. It can also contain a support code which users
      // can tell you so you know why their sign in was not allowed.
      window.alert(response.reason);
    } else {
      // sign in successful. The session tokens are automatically handled by
      // the frontend SDK.
      window.location.href = "/homepage";
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}

interface Props {
  message: string;
}

function EmailPassword(props: Props) {
  const email = createSignal("");
  const password = createSignal("");

  return <div>{props.message}</div>;
}

export default EmailPassword;
