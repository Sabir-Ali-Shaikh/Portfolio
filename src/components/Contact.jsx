import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [personName, setPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const tempKey = process.env.REACT_APP_TEMPLATE_KEY;
  const key = process.env.REACT_APP_KEY;
  const form = useRef();
  console.log(form.current);
  const sendEmail = (e) => {
    e.preventDefault();
    if (email && personName && message) {
      emailjs
        .sendForm(`${serviceKey}`, `${tempKey}`, form.current, `${key}`)
        .then(
          (result) => {
            toast.success("Message Sent successfully");
            form.current.reset();
            setEmail("");
            setMessage("");
            setPersonName("");
          },
          (error) => {
            toast.error(error);
          }
        );
    } else {
      toast.error("Fill all Details ");
    }
  };
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#111111] flex justify-center  items-center p-4"
      >
        <form ref={form} className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#00CDAE] text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">let's Connect ?</p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="from_name"
            value={personName}
            onChange={(e) => {
              setPersonName(e.target.value);
            }}
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="user_email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button
            onClick={sendEmail}
            className="text-white border-2 hover:bg-[border-pink-600] hover:border-[#00CDAE] px-4 py-3 my-8 mx-auto flex items-center"
          >
            Let's Collaborate
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Contact;

// export const Contact = () => {

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
