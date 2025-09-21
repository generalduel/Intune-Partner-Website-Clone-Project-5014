import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

// Initialize EmailJS
emailjs.init(emailConfig.PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      service: formData.service || 'Not specified',
      message: formData.message,
      to_email: emailConfig.TO_EMAIL,
      reply_to: formData.email
    };

    const response = await emailjs.send(
      emailConfig.SERVICE_ID,
      emailConfig.TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Email sent successfully!',
      response
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again or contact us directly.',
      error
    };
  }
};

export const sendNewsletterSubscription = async (email) => {
  try {
    const templateParams = {
      subscriber_email: email,
      to_email: emailConfig.TO_EMAIL,
      subscription_date: new Date().toLocaleDateString()
    };

    // You would need a separate template for newsletter subscriptions
    const response = await emailjs.send(
      emailConfig.SERVICE_ID,
      'template_newsletter', // Create this template in EmailJS
      templateParams
    );

    return {
      success: true,
      message: 'Successfully subscribed to newsletter!',
      response
    };
  } catch (error) {
    console.error('Newsletter EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to subscribe. Please try again.',
      error
    };
  }
};