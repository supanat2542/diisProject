const { request } = require('express');
const moment = require('moment');
const { Pool } = require('pg');
const pool = new Pool({
    connectionString : process.env.DATABASE_URL = 'postgres://wgawxbdqhysitb:2237e7d2f53e1d3f1a6b6655db1710e5cb0c37f1a5760ba1d45ed4de27bc8d89@ec2-3-229-166-245.compute-1.amazonaws.com:5432/dfefjelb0iakj2',
    ssl: {
      rejectUnauthorized: false
    }
})

const getVisitor = async(req, res) => {
    try {
        const result = await pool.query(`SELECT id , name
        FROM visitot
        `);
        output = {
            status: "success",
            result: result
        }
    } catch (error) {
        output = {
            status: "failed",
            result: error
        }
    }
    res.json(output);
}

module.exports = {
    getVisitor
}