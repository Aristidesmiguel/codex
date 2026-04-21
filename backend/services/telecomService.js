const sendSmsMock = async ({ phone, message }) => {
  // Simulação de integração com operadora local
  return {
    provider: 'SIMAI-MOCK-SMS',
    phone,
    message,
    status: 'queued',
    sentAt: new Date().toISOString(),
  };
};

const getUssdMenu = (input = '') => {
  const menus = {
    '': 'CON SIMAI\n1. Ver último alerta\n2. Reportar inundação\n3. Número de emergência',
    '1': 'END Último alerta: Risco moderado em Luanda (Talatona).',
    '2': 'END Envie SMS com: INUNDACAO#Bairro#Descrição para 19090.',
    '3': 'END Emergência: 113 (Proteção Civil).',
  };

  return menus[input] || 'END Opção inválida.';
};

module.exports = {
  sendSmsMock,
  getUssdMenu,
};
