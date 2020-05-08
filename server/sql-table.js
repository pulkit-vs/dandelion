'use strict';
require('dotenv').config({ path: __dirname + '/.env' });

const
  async = require('async'),
  mysql = require('mysql'),
  Utility = require('./api/controllers/common/utils'),
  logger = require('./api/controllers/common/logger');

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
    NAME varchar(45) NOT NULL,
    PROJECT_KEY varchar(45) NOT NULL,
    ICON varchar(45) DEFAULT NULL,
    DESCRIPTION varchar(255) DEFAULT NULL,
    PROJECT_CATEGORY varchar(45) NOT NULL,
    PROJECT_TYPE varchar(45) NOT NULL,
    TEMPLATE_ID varchar(45) NOT NULL,
    OWNER int NOT NULL,
    PROJECT_LEAD int DEFAULT NULL,
    ISSUE_TYPE_SCHEMA varchar(45) NOT NULL DEFAULT 'DEFAULT_SCHEMA',
    WORKFLOW_SCHEMA varchar(45) NOT NULL DEFAULT 'DEFAULT_SCHEMA',
    ISSUE_PRIORITY_SCHEMA varchar(45) NOT NULL DEFAULT 'DEFAULT_SCHEMA',
    NOTIFICATION_SCHEMA varchar(45) NOT NULL DEFAULT 'DEFAULT_SCHEMA',
    PROJECT_MEMBERS text,
    ACTIVE tinyint NOT NULL DEFAULT '1',
    CREATED_TS datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UPDATED_TS datetime DEFAULT NULL,
    PRIMARY KEY (ID),
    UNIQUE KEY PROJECT_KEY_UNIQUE (PROJECT_KEY),
    KEY PROJECT_KEY (PROJECT_KEY)
  );`,
  `CREATE TABLE IF NOT EXISTS CONFIGURATION (
    ID int NOT NULL AUTO_INCREMENT,
    CONFIG_NAME varchar(45) NOT NULL,
    CONFIG_CODE varchar(45) NOT NULL,
    DATA text NOT NULL,
    CREATED_BY varchar(45) NOT NULL,
    ACTIVE tinyint NOT NULL DEFAULT '1',
    CREATED_TS datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UPDATED_TS datetime DEFAULT NULL,
    PRIMARY KEY (ID),
    UNIQUE KEY CONFIG_CODE_UNIQUE (CONFIG_CODE),
    KEY CONFIG_CODE_NAME (CONFIG_CODE,CONFIG_NAME)
  );`,
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
  );`,
  `CREATE TABLE IF NOT EXISTS ISSUES (
    ID int NOT NULL AUTO_INCREMENT,
    PROJECT_ID int NOT NULL,
    TITLE varchar(255) NOT NULL,
    DESCRIPTION text,
    ISSUE_TYPE_ID varchar(45) NOT NULL,
    ISSUE_STAGE_ID varchar(45) NOT NULL,
    PRIORITY_ID varchar(45) NOT NULL,
    ASSIGNEE_ID int DEFAULT NULL,
    REPORTER_ID int NOT NULL,
    LABELS text,
    SPRINT_ID int DEFAULT NULL,
    STORY_POINTS int DEFAULT NULL,
    ATTACHMENTS mediumtext,
    EPIC_ID int DEFAULT NULL,
    COMPONENTS text,
    AFFECTED_VERSIONS text,
    FIXED_VERSIONS text,
    COMMENTS mediumtext,
    WATCHERS text,
    ENVIRONMENT varchar(45) DEFAULT NULL,
    ACTIVE tinyint NOT NULL DEFAULT '1',
    ASSIGNED_TS datetime DEFAULT NULL,
    STARRED text,
    CREATED_TS datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UPDATED_TS datetime DEFAULT NULL,
    PRIMARY KEY (ID),
    KEY ISSUE_SPRINT_ID (SPRINT_ID) ,
    KEY ISSUE_EPIC_ID (EPIC_ID) ,
    KEY ISSUE_ASSIGNEE_ID (ASSIGNEE_ID) ,
    KEY ISSUE_PROJECT_ID (PROJECT_ID)
  );`,
  `CREATE TABLE IF NOT EXISTS ISSUE_TYPE_SCHEMA (
    ID int NOT NULL AUTO_INCREMENT,
    CODE varchar(45) NOT NULL,
    TYPE text,
    CREATED_BY int NOT NULL,
    UPDATED_BY int DEFAULT NULL,
    CREATED_TS datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UPDATED_TS datetime DEFAULT NULL,
    PRIMARY KEY (ID),
    KEY CODE (CODE)
  );`,
  `CREATE TABLE IF NOT EXISTS ISSUE_PRIORITY_SCHEMA (
    ID int NOT NULL AUTO_INCREMENT,
    CODE varchar(45) NOT NULL,
    TYPE text,
    CREATED_BY int NOT NULL,
    UPDATED_BY varchar(45) DEFAULT NULL,
    CREATED_TS datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UPDATED_TS datetime DEFAULT NULL,
    PRIMARY KEY (ID),
    UNIQUE KEY CODE_UNIQUE (CODE)
  );`,
  `CREATE TABLE IF NOT EXISTS WORKFLOW_SCHEMA (
    ID int NOT NULL AUTO_INCREMENT,
    CODE varchar(45) NOT NULL,
    TYPE text,
    CREATED_BY int NOT NULL,
    UPDATED_BY int DEFAULT NULL,
    CREATED_TS datetime DEFAULT NULL,
    UPDATED_TS datetime DEFAULT NULL,
    PRIMARY KEY (ID),
    UNIQUE KEY CODE_UNIQUE (CODE)
  );`,
  `CREATE TABLE IF NOT EXISTS NOTIFICATION_SCHEMA (
    ID int NOT NULL AUTO_INCREMENT,
    CODE varchar(45) NOT NULL,
    TYPE text,
    CREATED_BY int NOT NULL,
    UPDATED_BY int DEFAULT NULL,
    CREATED_TS datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UPDATED_TS datetime DEFAULT NULL,
    PRIMARY KEY (ID),
    UNIQUE KEY CODE_UNIQUE (CODE)
  );`
];

class TableController {
  static run() {
    async.eachSeries(CREATE_TABLE_QUERIES, function (sql, ok) {
      pool.query(sql, function (err, result) {
        if (err) throw err;

        if (result.affectedRows > 0) {
          logger.info('Table created\n', CREATE_TABLE_QUERIES);
        }
        ok();
      });
    }, function Done(err) {
      if (err) {
        logger.info('error', err);
      } else {
        logger.info('Database Tables already exists');
      }
    });
  }
}

TableController.run();

module.exports = TableController;