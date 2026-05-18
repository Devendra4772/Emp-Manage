const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/employees",
require("./routes/employeeRoutes"));

app.use("/api/auth",
require("./routes/authRoutes"));

app.use("/api/ai",
require("./routes/aiRoutes"));

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});