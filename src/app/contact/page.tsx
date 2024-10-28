'use client';
import React from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(`Email: ${email}\nMessage: ${message}`);
    alert('Message Sent Successfully');
  };

  return (
    <div className='py-2 flex flex-col justify-center items-center min-h-screen gap-3'>
      <h1 className='mt-32 text-5xl font-semibold'>Contact Us</h1>
      <p className="text-center sm:w-1/2 xl:w-1/3">
        We are here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
      </p>
      <form className='w-full flex flex-col gap-1 sm:w-1/2 xl:w-1/3' onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='m-2 px-4 py-2 bg-gray-600 text-white rounded'
          required
          type="email"
          name="email"
          id="email"
          placeholder='Your email address'
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='m-2 px-4 py-2 bg-gray-600 text-white rounded'
          required
          name="message"
          id="message"
          placeholder='Your message'
        ></textarea>
        <button
          className='mx-auto text-center text-white bg-teal-400 font-medium rounded px-4 py-2 w-fit'
          type="submit"
        >
          Send Message
        </button>
      </form>
      <BackgroundBeams className="absolute w-full h-full -z-10" />
    </div>
  )
}

export default Contact;
