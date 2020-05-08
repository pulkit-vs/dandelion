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
  mysql = require('mysql2'),
  Utility = require('./utils'),
  pool = mysql.createPool({
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    // aquireTimeout: 60 * 60 * 1000,
    // timeout: 60 * 60 * 1000,
    waitForConnections: true,
    queueLimit: 0,
    host: Utility.getEnvVar('RDS_HOSTNAME'),
    user: Utility.getEnvVar('RDS_USERNAME'),
    password: Utility.getEnvVar('RDS_PASSWORD'),
    port: Utility.getEnvVar('RDS_PORT'),
    database: Utility.getEnvVar('RDS_DATABASE'),
    debug: false,
    // wait_timeout: 28800,
    // connect_timeout: 10
  }),
  logger = require('./logger');

class DatabaseManager {
  constructor() { }

  async post(body, dbTable) {
    logger.info('DatabaseManager: post : add row to the the dbTable:', dbTable);
    try {
      // get a timestamp before running the query
      var preQuery = Utility.getLocalTimestamp();
      const sql = `INSERT INTO ${dbTable} SET ?`;
      const [rows, fields] = await pool.promise().query(sql, body);
      // get a timestamp after running the query
      var postQuery = Utility.getLocalTimestamp();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      logger.info('DatabaseManager: post : sql: %s duration: %s secs', sql, duration);
      logger.info('DatabaseManager: post : rows', rows);
      return rows;
    } catch (err) {
      logger.error(`DatabaseManager: post : Error while executing the query : err = ${err}`);
      throw err;
    }
  }

  async patch(req, dbTable, body) {
    logger.info('DatabaseManager: update > dbtable:', dbTable);
    const ID = 'ID';
    try {
      var preQuery = Utility.getLocalTimestamp();
      const queryId = req.params.id;
      const sql = `UPDATE ${dbTable} SET ? WHERE ${ID} = ${queryId}`;
      logger.info('update: sql', sql);
      const [rows, fields] = await pool.promise().query(sql, body);
      // get a timestamp after running the query
      var postQuery = Utility.getLocalTimestamp();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      logger.info('DatabaseManager: patch: sql: %s duration: %s secs', sql, duration);
      logger.info('DatabaseManager: patch: result:rows', rows);
      return rows;
    } catch (err) {
      logger.error('DatabaseManager: patch: Error wilte executing the query:  error: ' + err);
      throw err;
    }
  }

  async executeQuery(sql) {
    logger.info('DatabaseManager::executeQuery > query:', sql);
    try {
      // get a timestamp before running the query
      var preQuery = Utility.getLocalTimestamp();
      const [rows, fields] = await pool.promise().query(sql);
      // get a timestamp after running the query
      var postQuery = Utility.getLocalTimestamp();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      logger.info('DatabaseManager: executeQuery: sql: %s duration: %s secs', sql, duration);
      logger.info('DatabaseManager: executeQuery: result:rows', rows);
      return rows;
    } catch (err) {
      logger.error('DatabaseManager: executeQuery: Error: ' + err);
      throw err;
    }
  }

  async executeQueryWithBindParams(sql, bindParam) {
    logger.info('DatabaseManager::executeQueryWithBindParams > query:', sql);
    logger.info('DatabaseManager::executeQueryWithBindParams > bindParam:', bindParam);
    try {
      // get a timestamp before running the query
      var preQuery = Utility.getLocalTimestamp();
      const [rows, fields] = await pool.promise().query(sql, bindParam);
      // get a timestamp after running the query
      var postQuery = Utility.getLocalTimestamp();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      logger.info('DatabaseManager: executeQueryWithBindParams: sql: %s duration: %s secs', sql, duration);
      logger.info('DatabaseManager: executeQueryWithBindParams: result:rows', rows);
      return rows;
    } catch (err) {
      logger.error('DatabaseManager: executeQueryWithBindParams: Error: ' + err);
      throw err;
    }
  }

}

module.exports = DatabaseManager;