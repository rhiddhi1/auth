import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Auth Tutorial Backend");
//   console.log(connectDB.connection);
// });

app.use(express.json()); // allows us to parse inconing requests: req.body, we can grab the date from user eg: const { username, password, name } = req.body;

app.use("/api/auth", authRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log("Server is running on port ", PORT);
});
