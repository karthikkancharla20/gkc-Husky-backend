'use strict';
const mysql = require('mysql');
// local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'digiprexapi.ctky9owxz1tq.ap-south-1.rds.amazonaws.com',
  user     : 'digiprex',
  password : 'LDcF4K0lD0tSTJYwIUmi',
  database : 'gkc_husky',
  dialect:'mysql'
});
dbConn.connect(async function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;
// let sequelize = new Sequelize('mysql://digiprex:LDcF4K0lD0tSTJYwIUmi@digiprexapi.ctky9owxz1tq.ap-south-1.rds.amazonaws.com:3306/gkc_husky');
