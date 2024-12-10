import sqlite3 from 'better-sqlite3';

const db = new sqlite3('users.db');

export const getAllUsers = () => {
    try {
        return db.prepare('SELECT * FROM users').all();
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};
