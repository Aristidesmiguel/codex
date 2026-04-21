const { db } = require('../config/firebase');

const reportsCollection = db.collection('reports');

const createReport = async (data) => {
  const payload = {
    ...data,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  const docRef = await reportsCollection.add(payload);
  return { id: docRef.id, ...payload };
};

const listReports = async () => {
  const snapshot = await reportsCollection.orderBy('createdAt', 'desc').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const countRecentReports = async (minutes = 180) => {
  const threshold = new Date(Date.now() - minutes * 60 * 1000).toISOString();
  const snapshot = await reportsCollection.where('createdAt', '>=', threshold).get();
  return snapshot.size;
};

module.exports = {
  createReport,
  listReports,
  countRecentReports,
};
