import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/Sign-up-form";
import Button from "../../components/button/Button";

const signIn = () => {
  const logSignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div data-ux_mode="redirect">
      <h1>I'm Signin</h1>
      <Button buttonType="google" onClick={logSignInWithGoogle}>
        Login with google
      </Button>
      <SignUpForm />
    </div>
  );
};
export default signIn;
