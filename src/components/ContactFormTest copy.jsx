"use client";
import { useState } from "react";
export const ContactFormTest = () => {
  let [confirmation, setConfirmation] = useState(false);
  const handleSubmit = (event) => {
    // Prevents the default form submission behavior
    setConfirmation(true); // Sets confirmation to true when the form is submitted
  };

  // Test Two
  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
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
  }
  return (
    // <>
    //   {confirmation ? (
    //     <div>
    //       <h4>Form Submitted</h4>
    //       <button
    //         onClick={() => {
    //           setConfirmation(false);
    //         }}
    //       >
    //         Send another Message
    //       </button>
    //     </div>
    //   ) : (
    //     <form
    //       action="https://docs.google.com/forms/d/e/1FAIpQLSd4-27b_5VXOfMCuso2HtzhplNte2sAfce5ZEtLC5uwCi2e6w/formResponse"
    //       onSubmit={() => {
    //         setConfirmation(!confirmation);
    //       }}
    //       method="POST"
    //     >
    //       <div className="form-elements">
    //         <label htmlFor="entry.1928702380">Enter Email</label>
    //         <input
    //           className="p-2 border border-blue-400"
    //           type="email"
    //           name="entry.1928702380"
    //           id="email"
    //         />
    //       </div>
    //       <div className="form-element">
    //         <label htmlFor="entry.1859278332">Enter Name</label>
    //         <input
    //           className="p-2 border border-blue-400"
    //           type="text"
    //           name="entry.1859278332"
    //           id="name"
    //         />
    //       </div>
    //       <div className="form-element">
    //         <label htmlFor="entry.232724501">Enter Message</label>
    //         <input
    //           className="p-2 border border-blue-400"
    //           type="text"
    //           name="entry.232724501"
    //           id="name"
    //         />
    //       </div>
    //       <button type="submit">Submit Form</button>
    //     </form>
    //   )}
    //   </>
    <>
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
    </>
  );
};
