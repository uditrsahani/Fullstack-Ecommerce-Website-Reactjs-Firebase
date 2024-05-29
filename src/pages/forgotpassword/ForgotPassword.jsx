import React, { useState } from "react";
import { auth } from "../../firebase/FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import Layout from "../../components/layout/Layout";
import styled from "styled-components";
import { useEffect } from "react";

const ForgotPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const actionCodeSettings = {
      url: "http://localhost:5173/login", // Specify your redirect URL here
      handleCodeInApp: true,
    };

    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <StyledContactForm className="flex justify-center items-center h-screen mx-auto">
        <div>
          <form className="bg-gray-200 p-20 " onSubmit={handleSubmit}>
            <h2 className="text-center text-3xl font-bold text-black mb-10">Forgot Password</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button className="mt-5 focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2" type="submit">Reset Password</button>
          </form>
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
        </div>
      </StyledContactForm>
    </Layout>
  );
};

export default ForgotPassword;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
