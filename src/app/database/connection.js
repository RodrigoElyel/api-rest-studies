import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "teams",
});

// connect to the database
connection.connect();

/**
 * @description function to execute query to the database and return a promise
 * @param {string} sql query to be executed
 * @param {string=id or [data, id]} data data to be passed to the query
 * @param {string} rejectMsg mesaage to be returned if error
 * @param {string} resolveMsg  mesaage to be returned if success
 * @returns return object of promise
 */

export const consult = (sql, data = "", rejectMsg, resolveMsg) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, result) => {
      if (error) {
        return reject({
          message: rejectMsg,
          error: error,
        });
      } else {
        const response = JSON.parse(JSON.stringify(result));
        return resolve({
          message: resolveMsg,
          response: response,
        });
      }
    });
  });
};

export default connection;
