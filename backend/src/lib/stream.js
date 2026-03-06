import {streamChat} from "stream-chat"
import { ENV } from "./env.js"

const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if (!apiKey || !apiSecret) {
    console.error("Stream_API_KEY or STREAM_API_SECRET is missing)")
}

export const chatClient = StreamChat.getInstance(apiKey,apiSecret)


 // upsert stream user
export const upsertStreamUser = async(userData) => {
  try {
    await chatClient.upsertUser(userData)
    console.log("Stream user upserting successsfully:", userData);
  } catch (error) {
    console.error("Error upserting stream user:", error)
  }

}

// delete stream user 

export const deleteStreamUser = async(userId) => {
  try {
    await chatClient.deleteUsers([userId]);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting stream user:", error)
  }

}

//method to generatetoken

