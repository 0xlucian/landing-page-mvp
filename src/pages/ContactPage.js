import React from 'react';

const ContactPage = () => (
  <div className="contact-page p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
    <h1 className="text-3xl font-bold text-center mb-8">Contate-nos</h1>
    <div className="text-lg">
      <p className="mb-4">
        📧 <strong>Consultas de Vendas:</strong> Por favor envie um e-mail para <a href="mailto:sales@fonefalou.com" className="text-brand-blue hover:underline">sales@fonefalou.com</a>
      </p>
      <p className="mb-4">
        ⏰ <strong>Tempo de Resposta:</strong> Nossa equipe se esforça para responder a todos os e-mails dentro de 24-48 horas.
      </p>
      <p className="mb-4">
        ⚠️ <strong>Precisa de Ajuda Imediata?</strong> Mencione "URGENTE" no assunto do seu e-mail e priorizaremos sua solicitação.
      </p>
      <p className="mb-4">
        💬 <strong>Para todos os tipos de consultas, perguntas/ofertas, verificação de documentos:</strong> Por favor envie um e-mail para <a href="mailto:support@fonefalou.co" className="text-brand-blue hover:underline">support@fonefalou.co</a> e mencione seu nome e ID da conta no assunto.
      </p>
    </div>
  </div>
);

export default ContactPage;
