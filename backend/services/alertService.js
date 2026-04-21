const { db } = require('../config/firebase');

const alertsCollection = db.collection('alerts');

const createAlert = async (data) => {
  const payload = {
    ...data,
    active: true,
    createdAt: new Date().toISOString(),
  };

  const docRef = await alertsCollection.add(payload);
  return { id: docRef.id, ...payload };
};

const listActiveAlerts = async () => {
  const snapshot = await alertsCollection
    .where('active', '==', true)
    .orderBy('createdAt', 'desc')
    .get();

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

module.exports = {
  createAlert,
  listActiveAlerts,
};
