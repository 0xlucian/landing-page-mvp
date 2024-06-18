import React from 'react';

const ContactPage = () => (
  <div className="contact-page p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
    <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
    <div className="text-lg">
      <p className="mb-4">
        📧 <strong>Sales Inquiries:</strong> Please email us at <a href="mailto:sales@fonefalou.com" className="text-brand-blue hover:underline">sales@fonefalou.com</a>
      </p>
      <p className="mb-4">
        ⏰ <strong>Response Time:</strong> Our team strives to answer all emails within 24-48 hours.
      </p>
      <p className="mb-4">
        ⚠️ <strong>Need Immediate Help?</strong> Mention "URGENT" in your email subject line and we will prioritize your request.
      </p>
    </div>
  </div>
);

export default ContactPage;
