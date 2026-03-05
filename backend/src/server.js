import express from "express"
import cors from "cors";
import { connectDB } from "./lib/db.js";
import path from "path";
import { serve} from "inngest/express"
app.use("/api/inngest", serve({ client: inngest, functions }));


import { ENV } from "./lib/env.js"
import { connect } from "mongoose";



const __dirname = path.resolve();
const app = express();


// middleware


app.use(express.json());
//here credentials is set to true because we know that we will be sending cookies from the client to the server and we want to allow that.


app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));

 app.use("/api/inngest", serve({ client: inngest, functions }));


console.log(ENV.PORT);
console.log(ENV.DB_URL); 



app.get("/health" , (req,res) => {
    res.status(200).json({message: "Hello api"})
})

app.get("/", (req, res) => {
  res.send("Backend running");
});




//note- "we cam also use nodemon for development, but it needs to be installed globally or as a dev dependency"//

const startServer = async () => {
    try {
        await connectDB();
app.listen(ENV.PORT, () => 
  console.log("server is running", ENV.PORT));
    } catch (error) {
console.error("Error while starting the server", error);

    }
};

startServer();
