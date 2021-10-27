import React, {useState} from 'react'
import emailjs from "emailjs-com";

export default function Contact() {
  
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email && message) {
      emailjs.sendForm('gmail', 'template_d2ediih', e.target, 'user_SejSu9xMGZA4EEOnNxrtZ')
      .then((result) => {
          setName("");
          setEmail("");
          setMessage("");
          alert("message send");
      }, (error) => {
          console.log(error.text);
      });
    }else{
      alert("Please fill all fields");
    }
  }
  return (
    <section className="bg-gray-200 flex justify-center pb-28">
      <div className="w-large lg:w-medium 2xl:w-custom">
        <h2 className="text-4xl font-bold">Contact</h2>

        <form className="flex flex-col mt-12" onSubmit={handleSubmit}>
          <input name="name" value={name} onChange={(e) => setName(e.target.value)}className="p-3 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500" type="text" placeholder="Your Name" />
          <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500" type="email" placeholder="Your Email" />
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="p-3 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500" placeholder="Your Message" rows="6"></textarea>
          <input className="p-3 rounded-md my-3 bg-blue-500 text-white font-bold hover:bg-blue-400 cursor-pointer outline-none" type="submit" value="Send Message" />
        </form>
      </div>
    </section>
  )
}
