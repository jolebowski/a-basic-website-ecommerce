import { useState } from "react";
import {
  creatAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
        alert("Thre is a email exists already");
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
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
        <label>Email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <label>Confirm password</label>
        <input
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default SignUpForm;
