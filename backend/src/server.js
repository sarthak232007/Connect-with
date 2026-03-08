import express from "express";
import cors from "cors";
import path from "path";
import { serve } from "inngest/express";
import { clerkMiddleware } from '@clerk/express'

import { protectRoute } from "./middleware/protectRoute.js";  
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

import { inngest, functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";  
import sessionRoutes from "./routes/sessionRoutes.js";








// create express app FIRST
const app = express();
const __dirname = path.resolve();

//  MIDDLEWARE

app.use(express.json());

app.use(cors({
  origin: ENV.CLIENT_URL,
  credentials: true
}));

app.use(clerkMiddleware( ));// this adds auth field to reques object: req.auth()




// INNGEST ROUTE 

app.use("/api/inngest", serve({ client: inngest, functions }));



// when you pass an array of middleware to express , it automatically flattens and executes them sequwntially, one by one.

app.use("/api/chat", chatRoutes)
app.use("/api/sessions", sessionRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});


// SERVER START 

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
