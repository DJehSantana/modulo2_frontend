// Não alterar esse código
const sendEmail = (addressee, subject, body) => {
  if (!addressee)
    return "Um destinatário precisa ser fornecido ao enviar um e-mail.";
  if (!subject)
    return "O campo de assunto não deveria estar vazio ao enviar um e-mail.";
  if (!body)
    return "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.";

  console.log(`  
    De: news@carstore.com
    Para: ${addressee}
    Assunto: ${subject}
          
          ${body}
          
          \x1b[1mCarStore - Aqui você encontra o seu carro novo\x1b[0m

-----------------------------------------------------------------------------
      `);

  return "E-mail enviado com sucesso!";
};

module.exports = sendEmail;
