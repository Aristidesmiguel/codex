const { admin } = require('../config/firebase');

const sendPushNotification = async ({ token, title, body, data = {} }) => {
  if (!token) return null;

  const message = {
    token,
    notification: { title, body },
    data,
  };

  return admin.messaging().send(message);
};

module.exports = {
  sendPushNotification,
};
