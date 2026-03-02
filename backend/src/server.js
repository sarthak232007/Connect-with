import express from "express"
import { ENV } from "./lib/env.js"
const app = express()


     console.log(ENV.PORT);
     console.log(ENV.DB_URL); 



app.get("/health" , (req,res) => {
    res.status(200).json({message: "Hello api"})
})

//note- "we cam also use nodemon for development, but it needs to be installed globally or as a dev dependency"//

app.listen(ENV.PORT, () => console.log("server is running", ENV.PORT));