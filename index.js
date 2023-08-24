const express = require("express");
const pool = require("./db");
const queries = require("./queries");
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000

// Use body-parser middleware to parse JSON in request body
app.use(bodyParser.json());

// Define a route to create a table
app.get("/create-table", (req, res) => {
  pool.query(queries.createTableQuery, (error, result) => {
    if (error) {
      console.error("Error creating table:", error);
      res.status(500).json({ error: "Error creating table" });
    } else {
      console.log("Table created successfully");
      res.json({ message: "Table created successfully" });
    }
  });
});

// Get Users
app.get("/users", (req, res) => {
  pool.query(queries.getUsersQuery, (error, result) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Error fetching users" });
    } else {
      console.log("Users fetched successfully");
      res.json(result.rows); // Send the fetched users as JSON response
    }
  });
});

// Route to add a new user to the database
app.post("/add-user", (req, res) => {
  const { username, email } = req.body;


  pool.query(queries.addUserQuery, [username, email], (error, result) => {
    if (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "Error adding user" });
    } else {
      console.log("User added successfully");
      res.json(result.rows[0]); // Send the added user as JSON response
    }
  });
});


// Route to get a user by their ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  pool.query(queries.getUserQuery, [userId], (error, result) => {
    if (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Error fetching user' });
    } else {
      if (result.rows.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        console.log('User fetched successfully');
        res.json(result.rows[0]); // Send the fetched user as JSON response
      }
    }
  });
});


// Route to delete a user by their ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  
  pool.query(queries.deleteUserQuery, [userId], (error, result) => {
    if (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Error deleting user' });
    } else {
      if (result.rowCount === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        console.log('User deleted successfully');
        res.json({ message: 'User deleted successfully' });
      }
    }
  });
});



app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
