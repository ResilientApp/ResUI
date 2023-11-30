// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5500;

const uri = "mongodb+srv://username:password@cluster0.y7hp6fq.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
