import Solid from "solid-js";

interface Props {
  message: string;
}

function EmailPassword(props: Props) {
  return <div>{props.message}</div>;
}

export default EmailPassword;
