import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '',
    subject: '',
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_srak695',         
        'template_icvz5jp',        
        formData,                 
        'BjgRzl8YL6T6QFwZz'        
      )
      .then((response) => {
        alert('Email sent successfully!');
        console.log('Success:', response);
        setShowForm(false); // return to the initial view after successful submission
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Failed to send email. Please try again.');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#45174c] to-[#1c164d] rounded-lg flex-col justify-end items-center gap-[132px] w-full"
      >
        {!showForm ? (
          <div className="flex justify-center items-center flex-col">
            <p className="text-stone-300 text-lg mb-[23px]">CONTACT ME</p>
            <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">
              Got a project? Let's talk!
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="text-stone-300 font-semibold text-2xl lg:text-4xl underline transition-all duration-300 hover:text-white"
            >
              johnlesterbodonal.me@gmail.com
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="transition-all duration-500 flex flex-col items-center gap-4"
          >
            <h2 className="text-white text-2xl font-bold">Send a Message</h2>
            <input
              type="email"
              name="recipient"
              placeholder="Recipient Email"
              className="w-full p-2 rounded border border-gray-300"
              value={formData.recipient}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-2 rounded border border-gray-300"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 rounded border border-gray-300"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
              >
                Send
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px]">
          <p className="text-white font-bold hidden md:block">John Lester</p>
          <div className="flex justify-between gap-[19px]">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white font-semibold hover:underline"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white font-semibold hover:underline"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white font-semibold hover:underline"
            >
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
