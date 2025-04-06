import SignUpClient from "./SignupClientComponent";
import { createUser } from "../actions";

export default function SignUp() {
  return <SignUpClient createUserAction={createUser} />;
}
