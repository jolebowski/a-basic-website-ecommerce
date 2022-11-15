import { useState } from "react";
import {
  creatAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-imput/Form-input";
import Button from "../button/Button";

import { SignUpContainer, FormSignUp } from "./sign-up-form.styles";

const defaultFormFileds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formfields, setFormfields] = useState(defaultFormFileds);

  const { displayName, email, password, confirmPassword } = formfields;

  const resetForm = () => {
    setFormfields(defaultFormFileds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      const { user } = await creatAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("There is a email exists already");
      } else {
        console.error("user conection encountered an error", e);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfields({ ...formfields, [name]: value });
  };

  return (
    <SignUpContainer>
      <div>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
      </div>
      <FormSignUp onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <label></label>
        <FormInput
          label="Confirm password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <div>
          <Button type="submit">Sign up</Button>
        </div>
      </FormSignUp>
    </SignUpContainer>
  );
};

export default SignUpForm;
