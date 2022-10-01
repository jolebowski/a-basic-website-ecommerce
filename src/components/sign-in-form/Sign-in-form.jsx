import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-imput/Form-input";
import Button from "../button/Button";
import "./sign-in-form.scss";

const defaultFormFileds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formfields, setFormfields] = useState(defaultFormFileds);
  const { email, password } = formfields;

  const resetFormFields = () => {
    setFormfields(defaultFormFileds);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfields({ ...formfields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.error("user conection encountered an error", e);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />

        <div className="buttons-login">
          <Button type="submit">Login</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
