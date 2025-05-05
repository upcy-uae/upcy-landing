"use client";
import { useState } from "react";

export const Fidelityform = () => {
  let [confirmation, setConfirmation] = useState(false);

  // Test
  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    console.log(typeof formDatab);
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
    // Handle file upload
    // const fileInput = document.querySelector('input[type="file"]');
    // const file = fileInput.files[0];
    // formDatab.append("file", file);
    fetch(
      "https://script.google.com/macros/s/AKfycbwnNkiumokazXJB5tQ-XqJ0W4irJ39efmc02UICTjC6R4y0IeD_gqFZZXLpiZBt5BGI3Q/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
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
    // <>
    //   {confirmation ? (
    //     <h2>form submitted</h2>
    //   ) : (
    //     <>
    //       <h4>Fidelity</h4>
    //       <form className="form" onSubmit={(e) => Submit(e)}>
    //         <input
    //           className="block"
    //           placeholder="Your Name"
    //           name="Name"
    //           type="text"
    //         />
    //         <input
    //           className="block"
    //           placeholder="Your Email"
    //           name="Email"
    //           type="text"
    //         />
    //         <input
    //           className="block"
    //           name="file"
    //           type="file" // File upload input
    //         />
    //         <input className="block" name="Name" type="submit" />
    //       </form>
    //     </>
    //   )}
    // </>
    <>
      <div className="p-4  my-4 border">
        <h4>Fidelity Form</h4>
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
            type="email"
          />
          <input className="block" name="File" type="file" />
          <input
            className="block bg-dd-green px-4"
            name="button"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

// try {
//   // let obj = JSON.parse(e.postData.contents);
//   // let dcode = Utilities.base64Decode(obj.base64);
//   // let blob = Utilities.newBlob(dcode, obj.type, obj.name);
//   // let imageFile = DriveApp.getFolderById("1BPfw8rjONgbl381gXdXBVLThvmHykS0fZU39kvHvRCgbuPFWhsd2JOmTInNUK4zbgdTWPD1R").createFile(blob);
//   // let imageUrl = imageFile.getUrl();
//   // Append data including image URL to the spreadsheet
// // sheet.appendRow([new Date().toLocaleString("en-US", {
// //     year: "numeric",
// //     month: "2-digit",
// //     day: "2-digit",
// //     hour: "2-digit",
// //     minute: "2-digit",
// //     second: "2-digit",
// //   }), obj.name, obj.email, imageUrl]);
// let data = e.parameter;
// sheet.appendRow([data.Timestamp,data.Name,data.Email]);
// return ContentService.createTextOutput("Your message and image were successfully sent to the Google Sheet and Drive!");
// } catch(err){
//   return ContentService.createTextOutput(err);
// }
