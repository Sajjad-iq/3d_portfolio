import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const SendMessage = (ref: any) => {

  const [IsLoading, setIsLoading] = useState(false)

  const SendMessageHandler = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      await emailjs.sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, ref.current, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
        .then(() => {
          window.alert("Massage Sent")
        }, () => {
          window.alert("Massage not Sent")
        });
    } catch {
      console.log("Massage not Sent")
    } finally {
      setIsLoading(false)
    }


  };

  return { SendMessageHandler, IsLoading }
}
