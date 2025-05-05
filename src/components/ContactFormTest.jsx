"use client";
import { useState } from "react";
export const ContactFormTest = () => {
  let [confirmation, setConfirmation] = useState(false);

  // Test
  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    // Add formatted timestamp to form data
    const timestamp = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    formDatab.append("Timestamp", timestamp);
    fetch(
      "https://script.google.com/macros/s/AKfycbyiIfHOlM6TD0Xa3kf-TLCF_QWL18qH_bcbPiB43qA3CKj3xcwp5z97sczsK41oY5q6wQ/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setConfirmation(!confirmation);
  }
  return (
    <>
      {confirmation ? (
        <h2>form submitted</h2>
      ) : (
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input
            className="block"
            placeholder="Your Name"
            name="Name"
            type="text"
          />
          <input
            className="block"
            placeholder="Your Email"
            name="Email"
            type="text"
          />
          <input
            className="block"
            placeholder="Your Message"
            name="Message"
            type="text"
          />
          <input className="block" name="Name" type="submit" />
        </form>
      )}
    </>
  );
};
