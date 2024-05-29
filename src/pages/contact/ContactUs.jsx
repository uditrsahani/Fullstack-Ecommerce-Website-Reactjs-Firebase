import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Layout from '../../components/layout/Layout';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

export const ContactUs = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_13ntauk', 'template_eqc4ga4', form.current, {
        publicKey: 'xtn_7ieUdI2Cb8Uii',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast('Message Sent Successfully!.');
          setTimeout(()=>{
            location.reload()
          }, 700)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
 <Layout>
    <StyledContactForm className='flex justify-center items-center h-screen mx-auto'>
     <form className='bg-gray-200 p-10' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <Toaster
  toastOptions={{
    className: '',
    style: {
      border: '2px solid #3d85c6',
      padding: '16px',
      color: '#ffffff',
      fontWeight:'bold',
      background: '#6aa84f',
    },
  }}
/>
    </form>
   </StyledContactForm>
 </Layout>
  );
};


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