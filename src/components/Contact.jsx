import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../portfolioData';

export default function Contact() {
  const { email, github, linkedin, location } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && !value.trim()) {
      error = 'Name is required';
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Enter a valid email address';
      }
    } else if (name === 'message' && !value.trim()) {
      error = 'Message content is required';
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name] : '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const msgErr = validateField('message', formData.message);

    if (nameErr || emailErr || msgErr) {
      setErrors({ name: nameErr, email: emailErr, message: msgErr });
      setStatus({ type: 'error', message: 'Please correct inputs in the form before submitting.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    // Mock form sending
    setTimeout(() => {
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
      setStatus({ type: 'success', message: 'Thank you! Your inquiry was sent successfully.' });
      
      // Clear status after 5s
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg relative border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-heading font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
            Let's Collaborate
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white relative inline-block">
            Get In Touch
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full" />
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* Left info column */}
          <div className="lg:col-span-5 text-left">
            <h3 className="font-heading font-bold text-2xl text-white mb-6">
              Let's Build Something Together
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-[15px]">
              Have a project idea, a job opportunity, or just want to chat about software development and machine learning? Send a message and I'll get back to you!
            </p>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-dark-card border border-dark-border text-accent-cyan flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-gray-500 block uppercase font-semibold">Email Me</span>
                  <a href={`mailto:${email}`} className="text-sm font-semibold text-white hover:text-accent-violet transition-colors">
                    {email}
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-dark-card border border-dark-border text-accent-violet flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-gray-500 block uppercase font-semibold">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4 pt-6 border-t border-dark-border/40">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right form container */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-6 md:p-8 rounded-lg border border-dark-border/50 text-left">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded bg-dark-lighter border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-violet transition-colors ${
                      errors.name ? 'border-accent-rose' : 'border-dark-border'
                    }`}
                  />
                  {errors.name && <span className="text-xs text-accent-rose">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded bg-dark-lighter border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-violet transition-colors ${
                      errors.email ? 'border-accent-rose' : 'border-dark-border'
                    }`}
                  />
                  {errors.email && <span className="text-xs text-accent-rose">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded bg-dark-lighter border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-violet transition-colors ${
                      errors.message ? 'border-accent-rose' : 'border-dark-border'
                    }`}
                  />
                  {errors.message && <span className="text-xs text-accent-rose">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded font-heading font-bold text-sm bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-glow hover:opacity-95 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Submit status alert message */}
                {status.message && (
                  <div
                    className={`text-center py-2.5 rounded text-xs font-semibold mt-4 ${
                      status.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                        : 'bg-accent-rose/10 border border-accent-rose/20 text-accent-rose'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
