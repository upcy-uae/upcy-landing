"use client";
import { useRef } from "react";

export const FidelityFormThree = () => {
  const fileInputRef = useRef(null);

  const handleFileChange = async () => {
    const file = fileInputRef.current.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1];
      const obj = {
        base64: base64Data,
        type: file.type,
        name: file.name,
      };

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbw7Dw8u_ThARJvgnoravcyQ5rmUlAAeMUcPoDyUm7Ga77LXdrnl2fVzstyUFfAYvN4FBg/exec",
          {
            method: "POST",
            body: JSON.stringify(obj),
            mode: "no-cors",
          }
        );

        if (response.ok) {
          const responseData = await response.text();
          console.log(responseData); // Log the response data
        } else {
          throw new Error("Failed to upload file.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    reader.readAsDataURL(file);
  };
  return (
    <div>
      <h4>Fidelity</h4>
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
      <input type="file" accept="image/*" ref={fileInputRef} />

      <button onClick={handleFileChange}>Submit</button>
    </div>
  );
};
