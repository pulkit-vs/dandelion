'use strict';
require('dotenv').config({ path: __dirname + '/.env' });

const
  async = require('async'),
  mysql = require('mysql'),
  Utility = require('./api/controllers/common/utils');

const pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  aquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  waitForConnections: true,
  queueLimit: 0,
  host: Utility.getEnvVar('RDS_HOSTNAME'),
  user: Utility.getEnvVar('RDS_USERNAME'),
  password: Utility.getEnvVar('RDS_PASSWORD'),
  port: Utility.getEnvVar('RDS_PORT'),
  database: Utility.getEnvVar('RDS_DATABASE'),
  debug: false,
  wait_timeout: 28800,
  connect_timeout: 10
});

const CREATE_TABLE_QUERIES = [
  ` CREATE TABLE IF NOT EXISTS PROJECT (
    ID int NOT NULL AUTO_INCREMENT,
    PROJECT_KEY varchar(45) NOT NULL,
    TEMPLATE_ID varchar(45) NOT NULL,
    NAME varchar(45) NOT NULL,
    ICON varchar(255) DEFAULT NULL,
    DESCRIPTION varchar(255) DEFAULT NULL,
    PROJECT_CATEGORY varchar(45) NOT NULL,
    PROJECT_TYPE varchar(45) NOT NULL,
    CREATED_TS datetime DEFAULT CURRENT_TIMESTAMP,
    OWNER int NOT NULL,
    PROJECT_LEAD int DEFAULT NULL,
    PROJECT_MEMBERS text,
    ACTIVE tinyint NOT NULL DEFAULT '1',
    PRIMARY KEY (ID),
    KEY PROJECT_ID_IDX1 (ID),
    KEY PROJECT_INFO_IDX2 (NAME,ID),
    KEY PROJECT_KEY_IDX3 (ID,PROJECT_KEY)
  );
  `,
  `CREATE TABLE IF NOT EXISTS CONFIGURATION (
    ID int NOT NULL AUTO_INCREMENT,
    CONFIG_NAME varchar(45) NOT NULL,
    CONFIG_CODE varchar(45) NOT NULL,
    DATA text NOT NULL,
    CREATED_BY varchar(45) NOT NULL,
    CREATED_TS datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UPDATED_TS datetime DEFAULT NULL,
    ACTIVE tinyint NOT NULL DEFAULT '1',
    PRIMARY KEY (ID),
    UNIQUE KEY CONFIG_CODE_UNIQUE (CONFIG_CODE),
    KEY CONFIG_CODE_NAME (CONFIG_CODE,CONFIG_NAME)
  )`,
  `CREATE TABLE IF NOT EXISTS EMPLOYEE (
    ID int NOT NULL AUTO_INCREMENT,
    NAME varchar(45) NOT NULL,
    EMAIL varchar(45) DEFAULT NULL,
    USER_ROLE text,
    LOGIN_TYPE enum('CUSTOM','GOOGLE','LINKEDIN') NOT NULL,
    AUTHTOKEN varchar(45) DEFAULT NULL,
    MOBILE_NUMBER varchar(45) DEFAULT NULL,
    CREATED_TS datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ACTIVE tinyint NOT NULL DEFAULT '1',
    PRIMARY KEY (ID),
    KEY EMAIL (EMAIL)
  )`
];

class TableController {
  static run() {
    async.eachSeries(CREATE_TABLE_QUERIES, function(sql, ok) {
      pool.query(sql, function(err, result) {
        if (err) throw err;

        if (result.affectedRows > 0) {
          console.log('Table created\n', CREATE_TABLE_QUERIES);
        }
        ok();
      });
    }, function Done(err) {
      if (err) {
        console.log('error', err);
      } else {
        console.log('Database Tables already exists');
      }
    });
  }
}

TableController.run();

module.exports = TableController;