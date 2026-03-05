import express from "express";
import cors from "cors";
import path from "path";
import { serve } from "inngest/express";

import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { inngest, functions } from "./lib/inngest.js";

const __dirname = path.resolve();

// create express app FIRST
const app = express();


// ---------------- MIDDLEWARE ----------------

app.use(express.json());

app.use(cors({
  origin: ENV.CLIENT_URL,
  credentials: true
}));


// ---------------- INNGEST ROUTE ----------------

app.use("/api/inngest", serve({ client: inngest, functions }));


// ---------------- TEST ROUTES ----------------

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Hello api" });
});

app.get("/", (req, res) => {
  res.send("Backend running");
});


// ---------------- SERVER START ----------------

const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, () => {
      console.log("Server is running on port:", ENV.PORT);
    });

  } catch (error) {
    console.error("Error while starting the server", error);
  }
};

startServer();
