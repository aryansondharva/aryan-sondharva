"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import useIsMobileStore from "@/stores/isMobileStore";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const isMobile = useIsMobileStore((state) => state.isMobile);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const notification = toast.loading("Loading ....", {
      position: "bottom-right",
    });

    if (name == "" || phone == "" || email == "") {
      setLoading(false);
      toast.error("Please enter all the fields.", {
        id: notification,
      });
      // isMobile && alert("Please enter all the fields.");
    } else {
      const emailresponse = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          u_name: name,
          u_email: email,
          u_phone: phone,
          u_message: message,
        }),
      });

      if (emailresponse.status === 200) {
        toast.success(
          "Thank you for contacting me! Will get back to you soon.",
          {
            id: notification,
          }
        );
        // isMobile &&
        //   alert("Thank you for contacting me! Will get back to you soon.");
      } else {
        toast.error("Failed to contact, please try again later!", {
          id: notification,
        });
        // isMobile && alert("Failed to contact, please try again later!");
      }

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setLoading(false);
    }
  };

  return (
    <form className="form">
      <div className="flex-column">
        <label>Name </label>
      </div>
      <div className="inputForm">
        <svg
          height="20"
          viewBox="0 0 32 32"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3" data-name="Layer 3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
          </g>
        </svg>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="input"
          placeholder="Enter your Name"
          name="name"
        />
      </div>

      <div className="flex-column">
        <label>Email </label>
      </div>
      <div className="inputForm">
        <svg
          height="20"
          viewBox="0 0 32 32"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3" data-name="Layer 3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
          </g>
        </svg>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
          placeholder="Enter your Email"
          name="email"
        />
      </div>
      <div className="flex-column">
        <label>Phone </label>
      </div>
      <div className="inputForm">
        <svg
          height="20"
          viewBox="0 0 32 32"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3" data-name="Layer 3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
          </g>
        </svg>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          className="input"
          placeholder="Enter your Phone"
          name="phone"
        />
      </div>

      <div className="flex-column">
        <label>Message </label>
      </div>
      <div className="textareaIputForm">
        <svg
          height="20"
          viewBox="0 0 32 32"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3" data-name="Layer 3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
          </g>
        </svg>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="input"
          placeholder="Enter your Message"
          name="message"
        />
      </div>

      <button
        className="button-submit"
        disabled={loading}
        type="submit"
        onClick={handleSubmit}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-r-2 border-l-2 border-white"></div>
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
