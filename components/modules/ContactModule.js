import {Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './ContactModule.module.scss'

export default function ContactModule() {

  const [recaptchaValue, setRecaptchaValue] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
    
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          if (res.ok) {
            setSuccess('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
          } else {
            setError('Failed to send message.');
          }
        } catch (error) {
          setError('Something went wrong.');
        } finally {
          setLoading(false);
        }

        e.preventDefault();
        if (!recaptchaValue) {
          alert('Please complete the reCAPTCHA');
          return;
        }
    
        const response = await fetch('/api/verify-recaptcha', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            recaptchaValue,
          }),
        });
    
        const data = await response.json();
        if (data.success) {
          alert('reCAPTCHA verified successfully!');
        } else {
          alert('reCAPTCHA verification failed!');
        }
      };

      const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
      };
    
    return(
        <form id="contact_form" className={`${styles.contact_form_wrap} grid grid-cols-1 py-5 md:grid-cols-2 md:gap-x-8 w-full`} netlify="true" onSubmit={handleSubmit}>
            <div className="w-full">

            <input type="text" name="honey" style={{ display: 'none' }} onChange={handleChange} />

            <Input value={formData.name} id="name" type="text" label="Namn" labelPlacement="inside" variant="bordered" classNames={{label: ["contact_form_label", "group-data-[focus=true]:text-gray-400"], inputWrapper: ["contact_form_bg", "focus-within:!border-white"]}} className="py-2" onChange={handleChange} required />

            <Input value={formData.email} id="email" type="email" label="Email" labelPlacement="inside" variant="bordered" classNames={{label: ["contact_form_label", "group-data-[focus=true]:text-gray-400"], inputWrapper: ["contact_form_bg", "focus-within:!border-white"]}} className="py-2" onChange={handleChange} required />

            <Select value={formData.purpose} id="purpose" labelPlacement="inside" label="Ärende" variant="bordered" classNames={{label: ["contact_form_label", "group-data-[filled=true]:text-gray-400"], inputWrapper: "focus-within:!border-white", value: "text-white",  trigger: ["contact_form_select_bg", "group-data-[filled=true]:border-white"], popoverContent: ["select_popout_bg", "focus-within:!border-white"], listbox: "group-data-[focus=true]:text-gray-400" }} className="py-2" onChange={handleChange} required>
                <SelectItem classNames={{base: "data-[selectable=true]:focus:bg-purple-200"}} key="Samarbete" value="Samarbete">Samarbete</SelectItem>
                <SelectItem classNames={{base: "data-[selectable=true]:focus:bg-purple-200"}} key="Rekrytering" value="Rekrytering">Rekrytering</SelectItem>
                <SelectItem classNames={{base: "data-[selectable=true]:focus:bg-purple-200"}} key="Övrigt" value="Övrigt">Övrigt</SelectItem>
            </Select>
            </div>
            <div className="w-full md:h-full">
                <Textarea value={formData.message} id="message" type="text" label="Meddelande" labelPlacement="inside" variant="bordered" classNames={{label: ["contact_form_label", "group-data-[focus=true]:text-gray-400"], inputWrapper: ["contact_form_bg", "focus-within:!border-white", "textarea"]}}  className="py-2 h-full" onChange={handleChange} required />
            </div>

            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />

            <div className="flex pt-5 col-span-1 md:col-start-2 w-full md:justify-end">
                <Button className="button_base button_primary btn_internal py-2 px-4 w-full">{loading ? 'Skickar...' : 'Skicka meddelande'} </Button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </div>
        </form>
    )
}