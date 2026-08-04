import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    alert("Message sent successfully! (This is a simulation)");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section relative">
      <div className="container">
        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
        
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-12">
          <div>
            <h3 className="text-3xl mb-4">Let's talk about everything!</h3>
            <p className="text-text-secondary mb-10">
              Don't like forms? Send me an email. 👋
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-border-glass rounded-full flex items-center justify-center text-[#0ea5e9] transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent group-hover:-translate-y-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Email</h4>
                  <a href="mailto:walelign2129@gmail.com" className="text-text-secondary hover:text-text-primary transition-colors">walelign2129@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-border-glass rounded-full flex items-center justify-center text-[#0ea5e9] transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent group-hover:-translate-y-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Phone</h4>
                  <a href="tel:+251900000000" className="text-text-secondary hover:text-text-primary transition-colors">+251 900 000 000</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-border-glass rounded-full flex items-center justify-center text-[#0ea5e9] transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent group-hover:-translate-y-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Location</h4>
                  <span className="text-text-secondary">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="p-10 flex flex-col gap-6 max-[480px]:p-6 glass-panel" onSubmit={handleSubmit}>
            <div className="w-full">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-full bg-black/20 border border-white/10 rounded-lg py-4 px-5 text-text-primary font-inherit text-base transition-all duration-300 focus:outline-none focus:border-[#0ea5e9] focus:bg-black/30 focus:ring-2 focus:ring-[#0ea5e9]/10 placeholder:text-white/40 max-[480px]:py-3 max-[480px]:px-4"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="w-full bg-black/20 border border-white/10 rounded-lg py-4 px-5 text-text-primary font-inherit text-base transition-all duration-300 focus:outline-none focus:border-[#0ea5e9] focus:bg-black/30 focus:ring-2 focus:ring-[#0ea5e9]/10 placeholder:text-white/40 max-[480px]:py-3 max-[480px]:px-4"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="w-full">
              <textarea 
                name="message"
                placeholder="Your Message" 
                className="w-full bg-black/20 border border-white/10 rounded-lg py-4 px-5 text-text-primary font-inherit text-base transition-all duration-300 focus:outline-none focus:border-[#0ea5e9] focus:bg-black/30 focus:ring-2 focus:ring-[#0ea5e9]/10 placeholder:text-white/40 max-[480px]:py-3 max-[480px]:px-4 resize-y"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary justify-center mt-2 p-4">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
