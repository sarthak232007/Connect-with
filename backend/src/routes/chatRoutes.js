import { getStreamToken } from "../controllers/chatControllers.js";
import express from "express"
import { protectRoute } from "../middleware/protectRoute.js";  // we will use this middleware to protect our routes, only authenticated users can access these routes. it checks for the presence of a valid token in the request headers and verifies it before allowing access to the route handler.



const router = express.Router()



router.get("/token",protectRoute,getStreamToken)


export default router;