import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { fields } from "../../Data/fieldsData";

type FormDataType = Record<string, string>;

const ContactForm: React.FC = () => {

    
      const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        project: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    // Configure EmailJS
    const serviceID = "service_kor7u6m";
    const templateID = "template_q7dkknr";
    const userID = "Io0IwAYTTSX-IbW0_";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Message sent successfully:", response);
        alert("Message sent successfully!");
        setFormData(fields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {}));
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full" >
      {fields.map((field) => (
        <div key={field.id} className="">
          <label htmlFor={field.id} className="block text-sm font-medium text-my-secondery mb-2">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea data-aos="flip-up"
              id={field.id}
              value={formData[field.id as keyof FormDataType]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="dark:bg-my-primary text-sm h-20 text-my-primary dark:text-white  block w-full p-2 border dark:border-opacity-35 border-my-secondery rounded-md outline-none caret-my-secondery "
              required
            />
          ) : (
            <input data-aos="flip-up"
              type={field.type}
              id={field.id}
              value={formData[field.id as keyof FormDataType]} 
              onChange={handleChange}
              placeholder={field.placeholder}
              className="dark:bg-my-primary text-sm text-my-primary dark:text-white block w-full p-2 border dark:border-opacity-35 border-my-secondery rounded-md outline-none caret-my-secondery"
              required
            />
          )}
        </div>
      ))}
      <button data-aos="flip-up"
        type="submit"
        className="py-1 px-4 rounded-lg text-base 2xl:text-lg font-medium font-poppins cursor-pointer
                    flex gap-3 items-center w-fit justify-center mx-auto sm:mx-0 border dark:border-opacity-35 border-my-secondery  hover:bg-my-secondery" >
        Send Message
        <FontAwesomeIcon icon={faPaperPlane}/>
      </button>
        </form>
    </div>
   
  );
};

export default ContactForm;
