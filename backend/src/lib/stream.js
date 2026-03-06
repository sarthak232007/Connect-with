// backend/src/lib/stream.js
import pkg from "stream-chat"; // import the CommonJS module as default
const { StreamChat } = pkg;

import { ENV } from "./env.js"; // your environment variables

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.error("Stream_API_KEY or STREAM_API_SECRET is missing");
}

// create the chat client instance
export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

// upsert stream user
export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser(userData);
        console.log("Stream user upserted successfully:", userData);
    } catch (error) {
        console.error("Error upserting stream user:", error);
    }
};

// delete stream user
export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUsers([userId]);
        console.log("Stream user deleted successfully:", userId);
    } catch (error) {
        console.error("Error deleting stream user:", error);
    }
};

// generate token
export const generateToken = (userId) => {
    return chatClient.createToken(userId);
};
