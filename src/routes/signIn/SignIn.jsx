import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const signIn = () => {
  const logSignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div data-ux_mode="redirect">
      <h1>I'm Signin</h1>
      <button onClick={logSignInWithGoogle}>Login with google</button>
    </div>
  );
};
export default signIn;
