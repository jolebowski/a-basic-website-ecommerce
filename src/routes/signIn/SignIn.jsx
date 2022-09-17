import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/SignUpForm";

const signIn = () => {
  const logSignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div data-ux_mode="redirect">
      <h1>I'm Signin</h1>
      <button onClick={logSignInWithGoogle}>Login with google</button>
      <SignUpForm />
    </div>
  );
};
export default signIn;
