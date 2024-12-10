import sqlite from "better-sqlite3"
const db = new sqlite('users.db')
import SQL from 'better-sqlite3';

db.prepare(`
    CREATE TABLE IF NOT EXISTS users(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT,
       age INTEGER
    )
`).run()

const users = [
    {name:"Armen", age: "25"},
    {name:"Artak", age: "27"},
    {name:"Anna", age: "30"},
    {name:"Sara", age: "21"},
    {name:"Karine", age: "28"},
    {name:"Karen", age: "39"}, 
    {name:"Sevak", age: "23"},
    {name:"Narek", age: "22"},
    {name:"Edgar", age: "18"},
    {name:"Ani", age: "27"},
    {name:"Levon", age: "24"}
]

const stm = `INSERT INTO users(name, age) VALUES(@name, @age)`
users.forEach(u => {
    db.prepare(stm).run(u)
})