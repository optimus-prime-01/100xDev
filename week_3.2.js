const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

// Connect to MongoDB (no need for deprecated options)
mongoose.connect(
  "mongodb+srv://anmolsinha:anmolsinha@optimusprime.wzdsa.mongodb.net/"
);

// Define the User model
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

// Signup route
app.post("/signup", async function (req, res) {
  const { username, name, password } = req.body;

  // Check if the user already exists
  const userexists = await User.findOne({ email: username });
  if (userexists) {
    return res.status(400).send("Username already exists!");
  }

  // Create a new user
  const newUser = new User({
    name: name,
    email: username,
    password: password,
  });

  // Save the user to the database
  await newUser.save();

  res.json({
    msg: "Username created successfully!",
  });
});

// Start the server on port 3015 or next available port
const PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
