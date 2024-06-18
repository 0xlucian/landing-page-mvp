import React from 'react';

const FAQsPage = () => (
  <div className="faqs-page p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8 text-gray-800">
    <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
    <div className="text-lg">
      <p className="mb-4">
        💬 <strong>We're here to help and answer any questions you might have.</strong> We look forward to hearing from you!
      </p>
      <p className="mb-6">
        📧 <strong>For sales inquiries:</strong> Please email us at <a href="mailto:sales@fonefalou.com" className="text-brand-blue hover:underline">sales@fonefalou.com</a>
      </p>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">🕒 Response Time</h3>
        <p>
          Our team is dedicated to providing you with a timely response. We strive to answer all emails within 24-48 hours. Thank you for your patience!
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">💌 Why Email?</h3>
        <p>
          We choose email to ensure that we can provide thoughtful, comprehensive responses. It also allows us to keep a detailed record of our conversations with you, ensuring that we continually improve our service.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">⚠️ Need Immediate Help?</h3>
        <p>
          If your query is urgent, please mention <strong>"URGENT"</strong> in your email subject line, and we will prioritize your request.
        </p>
      </div>
      <p>
        📣 <strong>Your feedback is important to us.</strong> If there’s anything more you’d like to know about our products or services, please don’t hesitate to reach out. Please let us know how we can improve your experience.
      </p>
    </div>
  </div>
);

export default FAQsPage;
