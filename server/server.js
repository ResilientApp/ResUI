const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5500;

const uri = "mongodb+srv://gopuman:Qwerty123@cluster0.y7hp6fq.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

app.use(express.json());
app.use(cors());

app.get('/api/instances', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('resui');
    const collection = database.collection('instances');
    const instancesData = await collection.find({}).toArray();
    res.json(instancesData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

// Endpoint to handle user signup
app.post('/api/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
      }

      // Connect to the database
      await client.connect();
      const database = client.db('resui');
      const collection = database.collection('users');
  
      // Check if the user already exists
      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user into the database
      await collection.insertOne({
        name,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.close();
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
