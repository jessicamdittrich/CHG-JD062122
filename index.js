// IMPORT EXPRESS
const express = require('express');

// IMPORT MYSQL
const mysql = require('mysql2');

// IMPORT INQUIRER
const inquirer = require('inquirer');

// IMPORT CONSOLE TABLE
const cTable = require('console.table');

// SETTING UP PORT VARIABLE
const PORT = process.env.PORT || 3001;

// INITIALIZE EXPRESS
const app = express();

// SETTING UP EXPRESS APPLICATION TO HANDLE DATA PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONNECT TO MYSQL DATABASE
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'abcd1234!!',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

startQuestions = () => {
  inquirer.prompt([{
    type: "list",
    message: "What would you like to do?",
    name: "initial_questions",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "No, that's it."
    ],
  }])
  .then((response) => {
    switch (response.initial_questions) {
      case "View all departments":
        viewDepartments();
      break;
      case "View all roles":
        viewRoles();
      break;
      case "View all employees":
        viewEmployees();
      break;
      case "Add a department":

      break;
      case "Add a role":

      break;
      case "Add an employee":

      break;
      case "Update an employee role":

      break;
    }
  });
};

function viewDepartments () {
  db.query('SELECT department.id AS Department_ID, department.name AS Department_Name FROM department', (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res)
    }
  });
}

function viewRoles () {
  db.query('SELECT role.id AS Role_ID, role.title AS Role_Title, role.salary AS Role_Salary, department.name AS Role_Department_ID FROM role INNER JOIN department ON role.department_id = department.id;', (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res)
    }
  });
}

function viewEmployees () {
  db.query('SELECT employee.id AS Employee_ID, employee.first_name AS Employee_Name, role.title AS Employee_Role, employee.manager_id AS Employee_Manager FROM employee INNER JOIN role ON employee.role_id = role.id', (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res)
    }
  });
}

startQuestions();