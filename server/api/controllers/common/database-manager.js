/**
 * @class DatabaseManager
 * 
 * @description
 *    API controller for Database Manager
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */

'use strict';
require('dotenv').config('/.env');
const
  Mysql = require('mysql2'),
  Utility = require('./utils'),
  Pool = Mysql.createPool({
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    waitForConnections: true,
    queueLimit: 0,
    host: Utility.getEnvVar('RDS_HOSTNAME'),
    user: Utility.getEnvVar('RDS_USERNAME'),
    password: Utility.getEnvVar('RDS_PASSWORD'),
    port: Utility.getEnvVar('RDS_PORT'),
    database: Utility.getEnvVar('RDS_DATABASE'),
    debug: false,
  }),
  Logger = require('./logger');

class DatabaseManager {
  constructor() { }

  async post(body, dbTable) {
    Logger.info('DatabaseManager: post : add row to the the dbTable:', dbTable);
    try {
      // get a timestamp before running the query
      var preQuery = Utility.getLocalTimestamp();
      const sql = `INSERT INTO ${dbTable} SET ?`;
      const [rows, fields] = await Pool.promise().query(sql, body);
      // get a timestamp after running the query
      var postQuery = Utility.getLocalTimestamp();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      Logger.info('DatabaseManager: post : sql: %s duration: %s secs', sql, duration);
      Logger.info('DatabaseManager: post : rows', rows);
      return rows;
    } catch (err) {
      Logger.error(`DatabaseManager: post : Error while executing the query : err = ${err}`);
      throw err;
    }
  }

  async patch(id, dbTable, body) {
    Logger.info('DatabaseManager: patch > dbtable:', dbTable);
    const ID = 'ID';
    try {
      var preQuery = Utility.getLocalTimestamp();
      const queryId = id;
      const sql = `UPDATE ${dbTable} SET ? WHERE ${ID} = ${queryId}`;
      Logger.info('update: sql', sql);
      const [rows, fields] = await Pool.promise().query(sql, body);
      // get a timestamp after running the query
      var postQuery = Utility.getLocalTimestamp();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      Logger.info('DatabaseManager: patch: sql: %s duration: %s secs', sql, duration);
      Logger.info('DatabaseManager: patch: result:rows', rows);
      return rows;
    } catch (err) {
      Logger.error('DatabaseManager: patch: Error wilte executing the query:  error: ' + err);
      throw err;
    }
  }

  async executeQuery(sql) {
    Logger.info('DatabaseManager::executeQuery > query:', sql);
    try {
      // get a timestamp before running the query
      var preQuery = Utility.getLocalTimestamp();
      const [rows, fields] = await Pool.promise().query(sql);
      // get a timestamp after running the query
      var postQuery = Utility.getLocalTimestamp();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      Logger.info('DatabaseManager: executeQuery: sql: %s duration: %s secs', sql, duration);
      Logger.info('DatabaseManager: executeQuery: result:rows', rows);
      return rows;
    } catch (err) {
      Logger.error('DatabaseManager: executeQuery: Error: ' + err);
      throw err;
    }
  }

  async executeQueryWithBindParams(sql, bindParam) {
    Logger.info('DatabaseManager::executeQueryWithBindParams > query:', sql);
    Logger.info('DatabaseManager::executeQueryWithBindParams > bindParam:', bindParam);
    try {
      // get a timestamp before running the query
      var preQuery = Utility.getLocalTimestamp();
      const [rows, fields] = await Pool.promise().query(sql, bindParam);
      // get a timestamp after running the query
      var postQuery = Utility.getLocalTimestamp();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      Logger.info('DatabaseManager: executeQueryWithBindParams: sql: %s duration: %s secs', sql, duration);
      Logger.info('DatabaseManager: executeQueryWithBindParams: result:rows', rows);
      return rows;
    } catch (err) {
      Logger.error('DatabaseManager: executeQueryWithBindParams: Error: ' + err);
      throw err;
    }
  }

}

module.exports = DatabaseManager;