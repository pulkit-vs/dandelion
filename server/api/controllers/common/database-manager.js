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
  });

class DatabaseManager {
  constructor() {}
  async add(body, dbTable) {
    console.info('DatabaseManager::add > modelName:', dbTable);
    console.info('body', body);
    try {
      // get a timestamp before running the query
      var preQuery = new Date().getTime();
      const sql = `INSERT INTO ${dbTable} SET ?`;
      const [rows, fields] = await pool.promise().query(sql, body);
      // get a timestamp after running the query
      var postQuery = new Date().getTime();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      console.info('add: sql: %s duration: %s secs', sql, duration);
      console.info('DatabaseManager::add > rows', rows);
      return rows;
    } catch (err) {
      throw err;
    }
  }

  async update(req, dbTable, body, ID = 'ID') {
    console.info('DatabaseManager: update > modelName:', dbTable);
    console.info('DatabaseManager: update: body', body);
    ID = ID ? ID : 'ID';
    try {
      var preQuery = new Date().getTime();
      const queryId = req.params.id;
      const sql = `UPDATE ${dbTable} SET ? WHERE ${ID} = ${queryId}`;
      console.info('update: sql', sql);
      const [rows, fields] = await pool.promise().query(sql, body);
      // get a timestamp after running the query
      var postQuery = new Date().getTime();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      console.info('DatabaseManager: update: sql: %s duration: %s secs', sql, duration);
      console.info('DatabaseManager: update: result:rows', rows);
      return rows;
    } catch (err) {
      console.error('DatabaseManager: update: Error: ' + err);
      throw err;
    }
  }

  async executeQuery(sql) {
    console.info('DatabaseManager::executeQuery > query:', sql);
    try {
      // get a timestamp before running the query
      var preQuery = new Date().getTime();
      const [rows, fields] = await pool.promise().query(sql);
      // get a timestamp after running the query
      var postQuery = new Date().getTime();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      console.info('DatabaseManager: executeQuery: sql: %s duration: %s secs', sql, duration);
      console.info('DatabaseManager: executeQuery: result:rows', rows);
      return rows;
    } catch (err) {
      console.error('DatabaseManager: executeQuery: Error: ' + err);
      console.error('DatabaseManager: executeQuery: controllerName: ' + new DatabaseManager().getControllerName());
      throw err;
    }
  }

  async executeQueryWithBindParams(sql, bindParam) {
    console.info('DatabaseManager::executeQueryWithBindParams > query:', sql);
    console.info('DatabaseManager::executeQueryWithBindParams > bindParam:', bindParam);
    try {
      // get a timestamp before running the query
      var preQuery = new Date().getTime();
      const [rows, fields] = await pool.promise().query(sql, bindParam);
      // get a timestamp after running the query
      var postQuery = new Date().getTime();
      // calculate the duration in seconds
      var duration = (postQuery - preQuery) / 1000;
      console.info('DatabaseManager: executeQueryWithBindParams: sql: %s duration: %s secs', sql, duration);
      console.info('DatabaseManager: executeQueryWithBindParams: result:rows', rows);
      return rows;
    } catch (err) {
      console.error('DatabaseManager: executeQueryWithBindParams: Error: ' + err);
      console.error('DatabaseManager: executeQueryWithBindParams: controollerName: ' + new DatabaseManager().getControllerName());
      throw err;
    }
  }

  // delete
}

module.exports = DatabaseManager;