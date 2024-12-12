import mysql from 'mysql2/promise';

const dbConfig = {
  host: '148.66.142.20',
  user: 'oasisfertility_lead_store_lp',
  password: 'eXPn-o5vdy=w',
  database: 'oasisfertility_lead_store_lp',
};

const dbConnection = mysql.createPool(dbConfig);

export default dbConnection;
