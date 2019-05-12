'use srict';

const Pool = require('pg').Pool;

const configServer = require('./config/configServer');

const pool = new Pool(configServer);

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY login ASC', (error, results) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows);
      }
    )
}

const getCategoriesTests = (request, response) => {
    pool.query(
        `SELECT c.name AS category, s.name AS sub_category FROM cat_tests AS c
            INNER JOIN sub_cat_tests AS s ON c.cat_test_id = s.cat_test_id ORDER BY c.name, s.order`, (error, results) => {

            if (error) {
                throw error
            }

            response.status(200).json(results);
        }
    )
}

module.exports = {
    getUsers,
    getCategoriesTests
}