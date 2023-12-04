const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 5500;

const uri = "<mongo-uri>";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(express.json());
app.use(cors());

const generateToken = (user) => {
  return jwt.sign({ userId: user.id, email: user.email }, "your-secret-key", {
    expiresIn: "1h",
  });
};

app.post("/api/login", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("resui");
    const collection = database.collection("users");

    const { email, password } = req.body;

    const user = await collection.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.get("/api/instances", async (req, res) => {
  const { userEmail } = req.query;

  try {
    await client.connect();
    const database = client.db("resui");
    const collection = database.collection("instances");
    const instancesData = await collection.find({ user: userEmail }).toArray();

    res.json(instancesData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

// Endpoint to handle user signup
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Name, email, and password are required" });
    }

    // Connect to the database
    await client.connect();
    const database = client.db("resui");
    const collection = database.collection("users");

    // Check if the user already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await collection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
