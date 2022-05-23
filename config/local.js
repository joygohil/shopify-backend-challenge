const server = {
  port: 3000,
};
const mongo = {
  hosts: [
    'inventory-cluster.p8nbc.mongodb.net',
  ],
  database: 'inventory-cluster',
  username: 'root',
  password: 'root',
  debug: true,
  replicaSet: '',
  server: {
    auto_reconnect: true,
    socketOptions: {
      keepAlive: 1,
    },
  },
};
export default Object.freeze({ server, mongo });
