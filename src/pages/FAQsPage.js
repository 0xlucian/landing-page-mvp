import React from 'react';

const FAQsPage = () => (
  <div className="faqs-page p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8 text-gray-800">
    <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
    <div className="text-lg">
      <p className="mb-4">
        💬 <strong>Estamos aqui para ajudar e responder a quaisquer perguntas que você possa ter.</strong> Estamos ansiosos para ouvir de você!
      </p>
      <p className="mb-6">
        📧 <strong>Para consultas de vendas:</strong> Por favor envie um e-mail para <a href="mailto:sales@fonefalou.com" className="text-brand-blue hover:underline">sales@fonefalou.com</a>
      </p>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">🕒 Tempo de Resposta</h3>
        <p>
          Nossa equipe está dedicada a fornecer uma resposta oportuna. Nos esforçamos para responder a todos os e-mails dentro de 24-48 horas. Obrigado pela sua paciência!
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">💌 Por Que E-mail?</h3>
        <p>
          Escolhemos o e-mail para garantir que possamos fornecer respostas ponderadas e abrangentes. Isso também nos permite manter um registro detalhado de nossas conversas com você, garantindo que continuamente melhoremos nosso serviço.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">⚠️ Precisa de Ajuda Imediata?</h3>
        <p>
          Se sua consulta for urgente, por favor mencione <strong>"URGENTE"</strong> na linha de assunto do seu e-mail, e nós priorizaremos sua solicitação.
        </p>
      </div>
      <p>
        📣 <strong>Seu feedback é importante para nós.</strong> Se houver algo mais que você gostaria de saber sobre nossos produtos ou serviços, não hesite em entrar em contato. Por favor, nos informe como podemos melhorar sua experiência.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">• Contate-nos</h3>
        <p>
          Para todos os tipos de consultas, perguntas/ofertas, verificação de documentos, por favor envie um e-mail para <a href="mailto:support@fonefalou.com" className="text-brand-blue hover:underline">support@fonefalou.com</a> e mencione seu nome e ID da conta no assunto.
        </p>
      </div>
    </div>
  </div>
);

export default FAQsPage;
