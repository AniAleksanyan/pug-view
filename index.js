import express from 'express';
import sqlite3 from 'better-sqlite3';
import bodyParser from 'body-parser';
import { getAllUsers } from './api.js';

const app = express();
const db = new sqlite3('users.db');

app.use(express.static('public'));

app.set('views', 'pages');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    try {
        const users = getAllUsers();

        res.render('users', { users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Database error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});