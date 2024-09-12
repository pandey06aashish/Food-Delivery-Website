import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";

// Initialize the app
const app = express();
const port = process.env.PORT || 4000; // Use an environment variable for the port if available

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Use the food router for the /api/food route
app.use("/api/food", foodRouter);

app.use("/images",express.static('uploads'))

// Define a basic route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
