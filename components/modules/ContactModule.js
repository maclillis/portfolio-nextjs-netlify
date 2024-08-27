import {Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";

import React, { useState } from 'react';
import {CircularProgress} from "@nextui-org/react";

import styles from './ContactModule.module.scss'

export default function ContactModule() {

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const loadRecaptcha = () => {
    if (!recaptchaLoaded) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.onload = () => {
        setRecaptchaLoaded(true);
      };
      document.body.appendChild(script);
    }
  };

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      subject: '',
    });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
    
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!window.grecaptcha) {
      console.error('reCAPTCHA not yet loaded');
      return;
    }
    try {

    const recaptchaToken = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });

    const response = await fetch('/api/verifyRecaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        ...formData,
        recaptchaToken}),
    });

    const result = await response.json();

    if (response.ok) {
      // Continue with form submission
    } else {
      console.log("reCAPTCHA failed");
    }

  } catch (error) {
      setResponseMessage('Failed to send message. Please try again later.');
      console.log('Form error: ' + error);
    } finally {
      setIsSubmitting(false);
  }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage(true);
      } else {
        setResponseMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }

}
    
    return(
        <form id="contact_form" className={`${styles.contact_form_wrap} grid grid-cols-1 py-5 md:grid-cols-2 md:gap-x-8 w-full`} onSubmit={handleSubmit}>
            <div className="w-full">

            <input type="text" name="honey" style={{ display: 'none' }} onChange={handleChange} />

            <Input onFocus={loadRecaptcha} value={formData.namn} id="name" labelPlaceholder="Namn" type="text" name="name" label="Namn" labelPlacement="inside" variant="bordered" classNames={{label: ["contact_form_label", "group-data-[focus=true]:text-gray-400"], inputWrapper: ["contact_form_bg", "focus-within:!border-white"]}} className="py-2" onChange={handleChange} required />

            <Input value={formData.email} id="email" type="email" label="Email" name="email" labelPlacement="inside" variant="bordered" classNames={{label: ["contact_form_label", "group-data-[focus=true]:text-gray-400"], inputWrapper: ["contact_form_bg", "focus-within:!border-white"]}} className="py-2" onChange={handleChange} required />

            <Select value={formData.subject} id="subject" labelPlacement="inside" name="subject" label="Ärende" variant="bordered" classNames={{label: ["contact_form_label", "group-data-[filled=true]:text-gray-400"], inputWrapper: "focus-within:!border-white", value: "text-white",  trigger: ["contact_form_select_bg", "group-data-[filled=true]:border-white"], popoverContent: ["select_popout_bg", "focus-within:!border-white"], listbox: "group-data-[focus=true]:text-gray-400" }} className="py-2" onChange={handleChange} required>
                <SelectItem classNames={{base: "data-[selectable=true]:focus:bg-purple-200"}} key="Samarbete" value="Samarbete">Samarbete</SelectItem>
                <SelectItem classNames={{base: "data-[selectable=true]:focus:bg-purple-200"}} key="Rekrytering" value="Rekrytering">Rekrytering</SelectItem>
                <SelectItem classNames={{base: "data-[selectable=true]:focus:bg-purple-200"}} key="Övrigt" value="Övrigt">Övrigt</SelectItem>
            </Select>
            </div>
            <div className="w-full md:h-full">
                <Textarea value={formData.meddelande} id="message" type="text" name="message" label="Meddelande" labelPlacement="inside" variant="bordered" classNames={{label: ["contact_form_label", "group-data-[focus=true]:text-gray-400"], inputWrapper: ["contact_form_bg", "focus-within:!border-white", "textarea", "text-base"]}}  className="py-2 h-full text-base" onChange={handleChange} required />
            </div>

            <div className="flex pt-5 col-span-1 md:col-start-2 w-full md:justify-end">
                <Button type="submit" className="button_base button_primary btn_internal py-2 px-4 w-full">
                {isSubmitting ? ( <> Skickar...  <CircularProgress size="sm" color="default" /> </>) : ('Skicka')}
                </Button>
                {responseMessage && <p>{responseMessage}</p> }
            </div>
        </form>
    )
}