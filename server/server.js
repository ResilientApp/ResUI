const express = require("express");
const cors = require("cors");
const fetch = (await import('node-fetch')).default;

const app = express();
const port = 5500;

app.use(cors());
app.options('*', cors());

app.use(express.json());

const flaskBaseUrl = "https://server.resilientdb.com"; // Replace with your Flask server IP

// Function to handle API requests
const makeApiRequest = async (endpoint, method, data) => {
  try {
    const response = await fetch(`${flaskBaseUrl}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

// User signup
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Name, email, and password are required" });
    }

    // Make API request to Flask for user registration
    const { success, message } = await makeApiRequest("setUser", "POST", { email, password });
    console.log(success, message);

    if (success) {
      // User registered successfully
      res.status(200).json({ success: true, message: "User registered successfully" });
    } else {
      // Handle other cases
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "User already exists" });
  }
});

// User login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Make API request to Flask for user login
    const { success, message } = await makeApiRequest("getUser", "POST", { email, password });
    console.log(success, message);

    if (success) {
      // User login successful
      res.status(200).json({ success: true, message: "User logged in successfully", token: email });
    } else {
      // Handle other cases
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/instances", async (req, res) => {
  try {
    const { userEmail } = req.query;
    console.log(userEmail);

    // Make API request to Flask for getting instances data
    const { success, resdb, sdk } = await makeApiRequest("getInstances", "POST", { userEmail });
    // console.log(success, resdb, sdk);

    if (success) {
      // Instances data fetched successfully
      res.status(200).json({ success: true, resdb_count: resdb, sdk_count: sdk });
    } else {
      // Handle other cases
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  } catch (error) {
    console.error("Error getting instances data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/test", async (req, res) => {
  res.status(200).json({ status: "Hello world!" });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
